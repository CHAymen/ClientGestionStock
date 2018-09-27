import { Action } from "@ngrx/store";
import { Principal } from "./principal.model";

export const SAVE_USER= 'SAVE_USER';
export class SavePrincipalAction implements Action{
    readonly type = SAVE_USER;
    constructor(public playload: Principal){
        
    }

}