import { Component, OnInit } from '@angular/core';
 
import { Product } from 'src/app/models/app.product.model';
import { HttpService } from 'src/app/services/app.http.service';

@Component({
    selector: 'app-httpservice-component',
    templateUrl: './app.httpservice.view.html'
})

export class HttpServieComponent implements OnInit {
    product:Product;
    products:Array<Product>;
    message:string;
    productRowId:number=0;
    constructor(private serv:HttpService) { 
        this.product = new Product();
        this.products = new Array<Product>();
        this.message = '';
    }

    // get and print data in ngOnInit
    ngOnInit() {
        this.loadData();
    }

    loadData():void {
        this.serv.getData().subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products = response;
            this.message = 'data received successfully';
        },(error)=>{
            this.message=`Error Occured while receiving data ${error}`;    
        });
    }

    saveData():void {
        this.product.ProductId = 'Prd-10002';
        this.product.ProductName = 'Water Bottle';
        this.product.CategoryName = 'Home Appliances';
        this.product.Manufacturer = 'Neeri';
        this.product.Description = '1 Litter';
        this.product.BasePrice = 70;
        this.serv.postData(this.product).subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products.push(response);
            this.message = 'data added successfully';
        },(error)=>{
            this.message=`Error Occured while adding data ${error}`;    
        });   
    
    }

    deleteData(productId:number):void{


this.serv.deleteData(productId).subscribe((response)=>{

    // this.products= this.products.filter(x=>{

    //     x.ProductRowId!=productId
    // });
},
(error)=>{
    this.message=`Error Occured while deleting product with id: ${productId}`
});

    }

    updateData(productRowId:number):void{

        this.product.ProductId = productRowId.toString();
        this.product.ProductName = 'Water Bottle';
        this.product.CategoryName = 'Home Appliances';
        this.product.Manufacturer = 'Neeri';
        this.product.Description = '1 Litter';
        this.product.BasePrice = 70;

        this.serv.putData(productRowId,this.product).subscribe((response)=>{

        },(error)=>{
            this.message=`Error occured while updating the productId ${productRowId}`;
        });
        
    }
    



}