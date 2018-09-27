import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {API_URLS} from './config/api.url.config';
import {CookieService} from 'ngx-cookie-service';

import { PrincipalState } from './shared/principal.stat';
import { SAVE_USER } from './shared/save.principal.action';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class AppService {
authenticated: boolean=false;
  constructor(private http :HttpClient,private cookieService: CookieService,
    private store :Store<PrincipalState>) { }

  authenticate(credentials, callback){
    if(credentials ){
      const token=btoa(credentials.username+':'+credentials.password);
      this.cookieService.set('token',token);
     
      this.http.get(API_URLS.USER_URL).subscribe(response => {
        if(response && response['name']){
          console.log(response);
          this.authenticated=true
          this.store.dispatch({
            type:SAVE_USER,
            payload: response
          });
        }else{
          this.authenticated=false
        }
        return callback && callback();
      });
    }
    else {
      this.authenticated= false;
    }
  }
  logout (callback){
    // this.http.post('logout',{}).subscribe(()=>{
    //   this.authenticated=false;
    //   return callback && callback();
    // });
    return callback && callback();
  }
}
