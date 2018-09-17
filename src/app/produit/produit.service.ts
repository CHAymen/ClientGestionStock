import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {API_URLS} from '../config/api.url.config';

    @Injectable()
    export class ProduitService{
    private Produits:Produit[] =[];
    constructor(private http: HttpClient){
        let p1: Produit = new Produit('livre',5,20);
        let p2: Produit = new Produit('cahier',5,10);
        let p3: Produit = new Produit('stylo',5,5);
        this.Produits.push(p1);
        this.Produits.push(p2);
        this.Produits.push(p3);
    }

    // public getProduits(): Produit[]{
    //     return this.Produits;
    // }
    getProduits(): Observable<any>{
        return this.http.get(API_URLS.PRODUITS_URL);
    }
    addProduit(produit:Produit):Observable<any>{
        return this.http.post(API_URLS.PRODUITS_URL, produit);
    }
    updateProduit(produit:Produit):Observable<any>{
        return this.http.put(API_URLS.PRODUITS_URL, produit);
    }
    deleteProduit(ref:string):Observable<any>{
        return this.http.delete(API_URLS.PRODUITS_URL+'/'+ref);
    }

}