import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products: Product[];
 constructor(private productsService: ProductsService){

 }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsService.productAdded
      .subscribe((newProduct: Product)=>{
          this.products.push(newProduct);
      });
  }
  onAdd(){
   const newProduct = new Product('Prodict 3', 'Very cool', '1');
   this.productsService.addProduct(newProduct);

  }
}
