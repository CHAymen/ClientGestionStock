import {Injectable} from '@angular/core';
import {User} from '../shared/user.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import { CrudService } from '../shared/crud.service';

    @Injectable()
    export class UserService implements CrudService{
private roles:any=[];
    constructor(private http: HttpClient){
       
    }
    
    getAll(): Observable<any>{
        console.log(this.http.get(API_URLS.USER_CRUD_URL));
        return this.http.get(API_URLS.USER_CRUD_URL);
    }
    
    add(user:User):Observable<any>{
        console.log(user);
        this.ajoutRoles(user.roles,user);
        console.log(user);
         return this.http.post(API_URLS.USER_CRUD_URL, user);
        
    }
    update(user:User):Observable<any>{
       console.log(user.roles);
        this.ajoutRoles(user.roles,user);
        return this.http.put(API_URLS.USER_CRUD_URL, user);
    }
    delete(id:number):Observable<any>{
        return this.http.delete(API_URLS.USER_CRUD_URL+'/'+id);
    }

    getRoles():Observable<any>{
        this.roles=this.http.get(API_URLS.USER_CRUD_URL+'/role_user');
        return this.http.get(API_URLS.USER_CRUD_URL+'/role_user');
    }

    ajoutRoles(id,user){
console.log((id==2)+id+(id===2));
        user.roles=[];
        user.roles.push({"name":"ROLE_USER","id":1});
        if(id==2){
          
            user.roles.push({"name":"ROLE_ADMIN","id":2});
        }
    }


}