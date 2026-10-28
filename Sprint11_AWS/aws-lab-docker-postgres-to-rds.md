# AWS Lab: Moving PostgreSQL from Docker to Amazon RDS

*Step-by-step student guide*

## 1. Objective

In this lab, we will move a PostgreSQL database from a Docker container to Amazon RDS for PostgreSQL while keeping the application architecture largely unchanged.

### Target architecture

- **Angular frontend:** Amazon S3 + CloudFront
- **Spring Boot backend:** Docker container on Amazon EC2
- **NestJS backend:** Docker container on Amazon EC2
- **PostgreSQL database:** Amazon RDS in private subnets

The Spring Boot application will connect to RDS over the VPC network. The database will not be publicly accessible.

---

## 2. Understand the existing Docker Compose setup

Initially, the Docker Compose file contained three services:

1. `postgres` — PostgreSQL database container
2. `springboot` — Spring Boot backend
3. `nestjs` — NestJS backend

The Spring Boot service connected to PostgreSQL using:

```
jdbc:postgresql://postgres:5432/paysprint
```

Here, `postgres` is the Docker Compose service name. Docker resolves this name to the PostgreSQL container's IP address on the shared Docker network.

Our goal is to replace this database connection with the Amazon RDS endpoint.

---

## 3. Create two private subnets for RDS

Open the AWS Management Console and navigate to **VPC → Subnets**.

### Step 3.1: Create the subnets

Select the same VPC used by your EC2 instance.

Create two new subnets in different Availability Zones.

Example values from our lab:

| Setting | Subnet A | Subnet B |
|---|---|---|
| Name | `private-rds-subnet-a` | `private-rds-subnet-b` |
| Availability Zone | `us-east-1a` | `us-east-1b` |
| IPv4 CIDR | `172.31.96.0/20` | `172.31.112.0/20` |

> These are examples for the VPC used in the trainer's lab. Before creating subnets in another VPC, verify that the CIDR ranges are within the VPC's CIDR and do not overlap existing subnets.

### Step 3.2: Create a private route table

Navigate to **VPC → Route tables → Create route table**.

Enter:

- **Name:** `private-rds-rt`
- **VPC:** Your application VPC

The route table should have the local route for the VPC CIDR, for example:

- **Destination:** `172.31.0.0/16`
- **Target:** `local`

**Do not** add a route to an Internet Gateway.

### Step 3.3: Associate the subnets

Open the route table's **Subnet associations** tab.

Associate both `private-rds-subnet-a` and `private-rds-subnet-b` with `private-rds-rt`.

> **Why two subnets?** An RDS DB subnet group requires subnets in at least two Availability Zones, even if the database itself uses a Single-AZ deployment.

---

## 4. Create a security group for RDS

Navigate to **VPC → Security groups → Create security group**.

Use these settings:

- **Name:** `rds-postgres-shalini-sg`
- **VPC:** Your application VPC

Under **inbound rules**, add:

| Setting | Value |
|---|---|
| Type | PostgreSQL |
| Protocol | TCP |
| Port | 5432 |
| Source | EC2 application's security group ID |

For our lab, the EC2 security group was:

```
sg-0e5c8a19b0db21e8a
```

Use your own EC2 security group ID if it differs.

**Do not** allow inbound PostgreSQL traffic from `0.0.0.0/0`.

The security group allows the application on EC2 to connect to RDS while preventing arbitrary public clients from connecting.

---

## 5. Create the RDS DB subnet group

Navigate to **Amazon RDS → Subnet groups → Create DB subnet group**.

Enter:

- **Name:** `rds-private-subnet-group`
- **Description:** Private subnets for PostgreSQL RDS
- **VPC:** Your application VPC

Select the two private subnets created in Step 3:

- `private-rds-subnet-a`
- `private-rds-subnet-b`

Create the subnet group and verify that both subnets are listed.

---

## 6. Create the Amazon RDS PostgreSQL database

Navigate to **Amazon RDS → Databases → Create database**.

Choose **Full configuration**.

Use the following settings as a guide.

### Step 6.1: Database engine

- **Engine:** PostgreSQL
- **Engine version:** PostgreSQL 16.x, if available

Our existing Docker database used the `postgres:16` image, so PostgreSQL 16 is a natural match. If that version is unavailable, check application and driver compatibility before choosing another version.

Do **not** select Aurora PostgreSQL for this exercise.

### Step 6.2: Template and instance settings

- **Template:** Free tier, if eligible
- **DB instance identifier:** `paysprint-postgres-rds-shalini`
- **Master username:** `paysprintadmin`
- **Credentials management:** Self managed
- **Availability:** Single-AZ

Choose an instance class and storage configuration shown as eligible in your account's current Free Tier estimate.

For a small learning database, a Free Tier-eligible micro instance and 20 GiB of General Purpose SSD storage may be suitable if offered.

Store the master password securely. Do not commit it to Git or share it in screenshots.

> **Cost warning:** Free Tier eligibility, resource limits and pricing terms can change. Review the monthly estimate before creating the database. Multi-AZ deployments and additional resources may cost more.

### Step 6.3: Configure connectivity

Use these settings:

- **VPC:** Your application VPC
- **DB subnet group:** `rds-private-subnet-group`
- **Public access:** No
- **VPC security group:** `rds-postgres-shalini-sg`
- **Port:** 5432
- **Initial database name:** `paysprint`

If AWS automatically selects a default security group, remove it if it is not needed.

Keep encryption enabled.

Click **Create database** and wait until its status becomes **Available**.

---

## 7. Obtain the RDS endpoint

Open:

**RDS → Databases → paysprint-postgres-rds-shalini → Connectivity & security**

Copy the endpoint hostname and verify that the port is 5432.

Example endpoint from our lab:

```
paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com
```

Use the actual endpoint shown in your own RDS console.

The endpoint is a DNS hostname, not a URL. Do not add `https://` or `:5432` to the hostname itself.

---

## 8. Test network connectivity from EC2

Connect to your Ubuntu EC2 instance using EC2 Instance Connect or SSH.

Run:

```bash
nc -zv paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com 5432
```

Replace the hostname if your endpoint is different.

Expected output resembles:

```
Connection to paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com
5432 port [tcp/postgresql] succeeded!
```

This confirms that EC2 can reach RDS on TCP port 5432. It does **not** yet verify the database username or password.

If the connection fails, check:

- The RDS status is **Available**.
- The RDS security group's inbound rule allows port 5432 from the EC2 security group.
- EC2 and RDS use the correct VPC and network configuration.

---

## 9. Install the PostgreSQL client on Ubuntu EC2

The `psql` command-line client is needed to connect to PostgreSQL and execute SQL.

Run:

```bash
sudo apt update
```

Then install the client:

```bash
sudo apt install postgresql-client -y
```

Verify the installation:

```bash
psql --version
```

You should see the installed PostgreSQL client version.

---

## 10. Connect to RDS and verify the database

From your EC2 terminal, run:

```bash
psql -h paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com -p 5432 -U paysprintadmin -d paysprint
```

Replace the endpoint, username and database name with your own values if needed.

When prompted, enter the master password you configured for RDS. The password will not appear on the screen.

After a successful login, you should see a prompt similar to:

```
paysprint=>
```

Verify the current database and user:

```sql
SELECT current_database(), current_user;
```

List the tables:

```
\dt
```

A newly created database may show:

```
Did not find any tables.
```

This is expected if you have not yet run the schema script.

---

## 11. Load the schema and sample data into RDS

Our PaySprint project contains a file named `postgres.sql`. It creates six tables and inserts sample data.

The tables are:

- `advisors`
- `clients`
- `instruments`
- `accounts`
- `holdings`
- `transactions`

The `clients` table has a foreign key referencing `advisors`.

### Step 11.1: Run the SQL file

Make sure `postgres.sql` is available on the machine from which you will execute the command.

Because RDS is private, running the command directly from a home laptop may fail unless that laptop has an approved private network path to the VPC. For this lab, the file can be copied to EC2 and executed there.

From the directory containing `postgres.sql`, run:

```bash
psql \
  -h paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com \
  -p 5432 \
  -U paysprintadmin \
  -d paysprint \
  -f postgres.sql
```

Enter the password when prompted.

> **Important:** The script contains `DROP TABLE IF EXISTS` statements. Running it again will drop and recreate the listed tables and their data. Use it only when resetting that test database is intended.

### Step 11.2: Verify the tables

Connect to RDS again if necessary:

```bash
psql -h YOUR_RDS_ENDPOINT -p 5432 -U paysprintadmin -d paysprint
```

List the tables:

```
\dt
```

Verify the sample data:

```sql
SELECT COUNT(*) FROM clients;
```

For the provided PaySprint sample schema, the expected result is:

```
 count
-------
    11
```

At this stage, the RDS database has the schema and sample data.

---

## 12. Update the application's `.env` file

On the machine where you manage your Docker Compose project, open a terminal in the directory containing `docker-compose.yml`.

Edit the `.env` file:

```bash
nano .env
```

Update or add the following entries:

```env
POSTGRES_DB=paysprint
POSTGRES_USER=paysprintadmin
POSTGRES_PASSWORD=YOUR_RDS_MASTER_PASSWORD
POSTGRES_HOST=paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com
POSTGRES_PORT=5432
```

Replace the password placeholder with your actual RDS master password. Do not share the password.

Keep any unrelated variables that are already in `.env`.

Save the file in Nano:

1. Press `Ctrl+O`.
2. Press `Enter`.
3. Press `Ctrl+X`.

Ensure `.env` is excluded from Git so credentials are not committed to source control.

---

## 13. Update `docker-compose.yml`

Initially, Spring Boot used the Docker service name `postgres` in its JDBC URL.

The original configuration looked like this:

```yaml
SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/${POSTGRES_DB:-paysprint}
SPRING_DATASOURCE_USERNAME: ${POSTGRES_USER:-paysprint}
SPRING_DATASOURCE_PASSWORD: ${POSTGRES_PASSWORD:?Set POSTGRES_PASSWORD in .env}
```

We now want Spring Boot to connect to RDS.

Replace the Spring Boot service definition with the following configuration:

```yaml
  springboot:
    build:
      context: ./12-containerising-spring-boot-services
      dockerfile: Dockerfile
    container_name: paysprint-springboot
    restart: unless-stopped
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT:-5432}/${POSTGRES_DB:-paysprint}
      SPRING_DATASOURCE_USERNAME: ${POSTGRES_USER}
      SPRING_DATASOURCE_PASSWORD: ${POSTGRES_PASSWORD}
      SERVER_PORT: 8080
    ports:
      - "8080:8080"
    networks:
      - paysprint
```

### What changed?

1. The JDBC URL now uses the RDS hostname from `.env`.
2. The username and password come from `.env`.
3. The `depends_on` section for the local PostgreSQL service has been removed from Spring Boot.
4. Spring Boot no longer depends on the local PostgreSQL container to start.

### What about the existing PostgreSQL service?

Keep the local PostgreSQL service and its volume **temporarily**.

Do not remove the `postgres` service or delete the `postgres_data` volume until you have verified that the application works against RDS.

This protects your old local database during the transition.

---

## 14. Validate the Docker Compose configuration

From the directory containing your Compose file, run:

```bash
docker compose config --quiet
```

If the command completes without output or errors, Docker Compose has accepted the configuration.

If it reports a missing environment variable or YAML syntax error, correct that issue before proceeding.

---

## 15. Rebuild and restart Spring Boot

Run:

```bash
docker compose up -d --build springboot
```

This rebuilds the Spring Boot image if necessary and recreates its container with the updated environment variables.

Check the status of your containers:

```bash
docker compose ps
```

Then inspect the Spring Boot logs:

```bash
docker logs --tail 100 paysprint-springboot
```

Look for messages similar to:

```
Tomcat started on port 8080 (http)
Started MissionServiceApplication
```

These messages confirm that Spring Boot has started. However, they do not necessarily prove that the application has successfully queried RDS, because database connections may be established lazily.

---

## 16. Verify the RDS configuration inside the container

Run:

```bash
docker exec paysprint-springboot printenv SPRING_DATASOURCE_URL
```

Expected output resembles:

```
jdbc:postgresql://paysprint-postgres-rds-shalini.c8xuasgw2vz5.us-east-1.rds.amazonaws.com:5432/paysprint
```

This verifies that the container received the intended JDBC URL. It does not verify the password or prove that a query has succeeded.

---

## 17. Test an actual database-backed API endpoint

Choose a Spring Boot endpoint that reads from the database.

For example, if your application exposes `/api/clients`, run this command on EC2:

```bash
curl -i http://localhost:8080/api/clients
```

Replace the path with an actual endpoint in your application.

Interpret the result:

| Result | Meaning |
|---|---|
| `200 OK` with expected records | Good evidence that the application is reading from RDS. |
| `404 Not Found` | The URL may not match a controller route. |
| `500 Internal Server Error` | Inspect application logs for the underlying problem. |
| Authentication error | Check the RDS username and password. |
| Table or relation does not exist | Check whether the schema was loaded into the database the application is using. |
| Connection timeout | Recheck RDS status, security groups, endpoint and VPC configuration. |

Once the endpoint successfully returns the expected data, you have verified that Spring Boot can use the RDS database.

---

## 18. What about NestJS?

Our Docker Compose example shows the NestJS service running on port 3000, but it does not show any database connection settings for it.

If NestJS also reads or writes PostgreSQL, its database configuration must be updated separately to use the RDS endpoint and credentials.

If NestJS does not access PostgreSQL, no database configuration change is needed for that service.

---

## 19. Cleanup after successful verification

Only after the application is confirmed to work with RDS should you consider removing the local PostgreSQL service.

Before cleanup:

- Confirm that the application returns the expected records from RDS.
- Confirm that any other service needing PostgreSQL has also been updated.
- Decide whether you still need the old local database or its data.

**Do not run:**

```bash
docker compose down -v
```

during the migration. The `-v` option can delete named Docker volumes.

Once you are confident that the old database is no longer needed, you can remove the local PostgreSQL service from Compose in a separate, deliberate change.

Also review your RDS costs and delete the lab database when it is no longer required.

---

## 20. Final architecture

After successful migration, the architecture should be:

```
                       Users
                         |
                         v
                Amazon CloudFront
                         |
                         v
                    Amazon S3
                  Angular frontend
                         |
                API requests through
                   CloudFront paths
                         |
                         v
                  Amazon EC2
                Docker containers
                /              \
               v                v
         Spring Boot           NestJS
          Port 8080           Port 3000
               |
               | PostgreSQL / TCP 5432
               | through private VPC networking
               v
         Amazon RDS PostgreSQL
           Private subnets
          Public access: No
```

The exact CloudFront behavior and origin configuration depends on your existing deployment, but the database connection is now intended to be between Spring Boot and RDS.

---

## Key concepts learned

1. A Docker service name such as `postgres` works as a hostname inside the Docker Compose network; it is not the RDS hostname.
2. RDS uses a DNS endpoint to identify the database instance.
3. Private subnets and security groups help control database access.
4. A DB subnet group uses subnets from at least two Availability Zones.
5. TCP connectivity and successful database authentication are different tests.
6. Creating an RDS instance does not automatically migrate an existing schema or data.
7. Spring Boot can connect to RDS through environment variables without hardcoding credentials in the application source.
8. Existing Docker volumes should be preserved until the migration has been verified.

---

> **Final checkpoint:** Your migration is successful when the Spring Boot application running in Docker on EC2 can execute a database-backed API request and return the expected records from Amazon RDS.
