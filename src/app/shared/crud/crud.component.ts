import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  data:any;
  @Input()
  service: CrudService;
  @Input()
  initItem:any;
  @Input()
  initForm: FormGroup;
  @Input()
  dataModelList : DataModel[];
  crudForm: FormGroup;
  operation: string='add';
  selectedItem: any;
    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
      this.createForm();
     }
  
    ngOnInit() {  
      this.init();
     
    }
    add(){
      const p = this.crudForm.value;
      this.service.add(p).subscribe(
        res =>{
          this.init();
          this.loadData();
        }
      );
  
    }
    update(){
      this.service.update(this.selectedItem).subscribe(
        res =>{
          this.init();
          this.loadData();
        }
      );
    }
    delete(){
      this.service.delete(this.selectedItem.id).subscribe(
        res =>{
          this.init();
          this.loadData();
        }
      );
    }
  
    loadData(){
      this.service.getAll().subscribe(
        data =>{this.data = data},
        error =>{console.log('an error was occured.')},
        ()=> {console.log('loading data was done')}
      )
    }
    createForm(){
      this.initForm? this.crudForm=this.initForm : this.crudForm= this.fb.group ({ });
    
    }
    init(){
      this.selectedItem = this.initItem;
      this.createForm();
    }
  
  }
  