import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Auth {
    private http = inject(HttpClient);

    private url:string = 'http://localhost:3000/api/v1';

    loginUser(username:string, password:string):Observable<any>{
        return this.http.post<any>(`${this.url}/login`, {username, password}
        );
    }
    
}
