import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient){}

    getUsers(dataSettings): Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/GetUsers', dataSettings);
    }
    
    deleteUser(userId:string): Observable<any> {
        return this.http.delete<any>(this.baseUrl+`/Users/DeleteUser?id=${userId}`);
    }

    createUser(userData):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/CreateUser', userData);
    }
    
    updateUser(userData):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/UpdateUser', userData);
    }

    getRols(paging):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Roles/GetRoles',paging);
    }

    getUserById(id):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/GetUser',id);
    }

    getUserPermissions(data):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/GetUserPermissions', data);
    }

    grantOrRevokePermissions(data):Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Users/GrantOrRevokePermissions', data);
    }
}