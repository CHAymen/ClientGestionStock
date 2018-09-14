import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

    @Injectable()
    export class ProduitService{
    private Produits:Produit[] =[];
    constructor(){
        let p1: Produit = new Produit('livre',5,20);
        let p2: Produit = new Produit('cahier',5,10);
        let p3: Produit = new Produit('stylo',5,5);
        this.Produits.push(p1);
        this.Produits.push(p2);
        this.Produits.push(p3);
    }

    public getProduits(): Produit[]{
return this.Produits;
    }
}