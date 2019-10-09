import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SettingsService {
    private $settings: BehaviorSubject<any> = new BehaviorSubject( null );
    private settings: Object = null;

    constructor( private http: HttpClient ) {
        this.loadSettings();
    }

    private loadSettings() {
        if (!this.settings) {
            this.http.get(environment.settings).subscribe( data => {
                this.settings = data;
            });
        }
    }
}
