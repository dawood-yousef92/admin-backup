import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ItemsService {
    constructor(private http: HttpClient){}

    getCategoriesByBusinessType(businessType): Observable<any> {
        return this.http.post<any>('Companies/GetCategoriesByBusinessType', {businessType:businessType});
    }
}