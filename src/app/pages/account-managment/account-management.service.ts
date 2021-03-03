import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ManageAccountServise {

    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient){}

    updateUserProfile(phoneNumber:any): Observable<any> {
        return this.http.put<any>(this.baseUrl+'/Manage/UpdateUserProfile', phoneNumber);
    }

    changePassword(data:any): Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Manage/ChangePassword', data);
    }

    changeEmail(newEmail:any): Observable<any> {
        return this.http.post<any>(this.baseUrl+'/Manage/ChangeEmail', newEmail);
    }

    downloadPersonalData(): any {
        return this.http.get(this.baseUrl+'/Manage/DownloadPersonalData');
    }

    deleteUser(password): Observable<any> {
        return this.http.post<any>(this.baseUrl+'/manage/DeletePersonalData', password);
    }
    
}