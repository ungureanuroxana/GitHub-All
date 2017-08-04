import {Product} from "./product.model";
import {Subject} from "rxjs/Subject";

export class ProductsService{
  productAdded: Subject<Product> = new Subject<Product>();
  products = [
    new Product('Product 1', 'Very nice', '2444'),
    new Product('Product 2', 'Very nice as well', '100')
  ];

  getProducts(){
    return this.products.slice();//se returneaza o copie, nu referinta la produsul propriu-zis
  }
  addProduct(newProduct: Product){
    this.products.push(newProduct);
    this.productAdded.next(newProduct);
  }
}
