import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {

    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient){}

    getIdentitySettings(): Observable<any> {
        return this.http.get<any>(this.baseUrl+'/AppSettings/GetIdentitySettings');
    }
    
    updateIdentitySettings(settings):Observable<any> {
        return this.http.put<any>(this.baseUrl+'/AppSettings/UpdateIdentitySettings', settings);
    }
    
    
    getFileStorageSettings(): Observable<any> {
        return this.http.get<any>(this.baseUrl+'/AppSettings/GetFileStorageSettings');
    }

    updateFileStorageSettings(settings):Observable<any> {
        return this.http.put<any>(this.baseUrl+'/AppSettings/UpdateFileStorageSettings', settings);
    }

    getTokenSettings(): Observable<any> {
        return this.http.get<any>(this.baseUrl+'/AppSettings/GetTokenSettings');
    }

    UpdateTokenSettings(settings):Observable<any> {
        return this.http.put<any>(this.baseUrl+'/AppSettings/UpdateTokenSettings', settings);
    }
    
}