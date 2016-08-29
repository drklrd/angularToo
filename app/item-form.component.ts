import {Component,Inject} from '@angular/core';
import {Validators,FormBuilder} from  '@angular/common';
import {REACTIVE_FORM_DIRECTIVES,FormGroup, FormControl} from '@angular/forms';
import {ItemService} from "./item.service";
import {LOOKUP_LISTS} from './providers';
import {Router} from '@angular/router';

@Component({
    selector : 'item-form',
    templateUrl : 'app/item-form.component.html',
    styleUrls : ['app/item-form.component.css'],
    directives: [REACTIVE_FORM_DIRECTIVES], // required for model-driven form

})

export class ItemFormComponent{

    form;

    constructor(private itemService : ItemService,
                @Inject(LOOKUP_LISTS) public lookupLists,
                private router : Router ){}

    ngOnInit(){
        this.form = new FormGroup({
            'type' : new FormControl(),
            'name' : new FormControl('',Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'description' : new FormControl(),
            'addedDate' : new FormControl('',this.yearValidator)
        });
    }

    yearValidator(control){
        if(control.value.trim().length===0) return null;
        var dateUnix = new Date(control.value).getTime();
        if(dateUnix > new Date().getTime()) return {'date':true};
        return null;
    }

    onSubmit(item){
        this.itemService.add(item);

    }

}
