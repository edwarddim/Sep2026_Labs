import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Service()
export class Backend {

    private http = inject(HttpClient);

    private url:string = 'http://localhost:8082';

    getCustomerProfile(email:string):Observable<Customer>{
        return this.http.get<Customer>(`${this.url}/profile/${email}`);
    }


}
