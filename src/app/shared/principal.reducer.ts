import { SAVE_USER ,SavePrincipalAction} from "./save.principal.action";
import { Principal } from "./principal.model";

export function PrincipalReducer(state: Principal, action: SavePrincipalAction){
    switch(action.type){
       case  SAVE_USER: 
       return Object.assign({},state,action.playload);
      default:
      return state;


    }
}