import { Component, OnInit } from '@angular/core';
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produits: Produit[];
produitForm: FormGroup;
operation: string='add';
selectedProduit: Produit;
  constructor(private produitService:ProduitService,private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() { 
    
    this.initProduit();
    // this.loadProduits(); changer par resolve pour charger avec navigation
    this.produits = this.route.snapshot.data.produits;
  }
  addProduit(){
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res =>{
        this.initProduit();
        this.loadProduits();
      }
    );

  }
  updateProduit(){
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res =>{
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  deleteProduit(){
    this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
      res =>{
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  loadProduits(){
    this.produitService.getProduits().subscribe(
      data =>{this.produits = data},
      error =>{console.log('an error was occured.')},
      ()=> {console.log('loading produits was done')}
    )
  }
  createForm(){
    this.produitForm= this.fb.group ({
      ref: ['', Validators.required],
      quantite:'',
      prixUnitaire: ''
    });
  }
  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }

}
