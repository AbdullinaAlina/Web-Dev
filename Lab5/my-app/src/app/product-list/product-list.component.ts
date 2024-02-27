import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;
  @Input() selectedCategoryIds: number[] = []; // Receive selected categories from parent component


  share(product: Product) {
    window.open(`https://t.me/share/url?url=${product.href}&text=${product.name}`);
  }

  onNotify() {
    window.alert('Мы сообщим вам о скидке на выбранный товар!');
  }


  isProductInSelectedCategories(product: Product): boolean {
    if (this.selectedCategoryIds.length === 0) {
      return true; // Show all products if no categories selected
    }
    return this.selectedCategoryIds.includes(product.categoryId);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/