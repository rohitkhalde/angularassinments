// class must be expotable and the validaiton method must be static
// the validator logic method must return 'any', because if the data is valid then null will be returned
// else for invalid data the JSON object will be returned with invalidation key/value

import { AbstractControl } from "@angular/forms";
import { Product } from "src/app/models/app.product.model";
import { ProductFormComponent } from "./app.productform.component";

// e.g. {valueInvlaid:true}  
export class CustomProductIdValidator {
     static checkIfUnique(id:Number,param:Array<Product>):any {
        let value = id;
        if(this.isUnique(value)){
            return null;  // valid
        } else {
            return {
                even:false    
            };
        }
     }

   static isUnique(id:Number):boolean{

    ProductFormComponent
        return true;

    }

    
}