import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCategoryIds: number[] = []; // Property to hold selected category IDs
  likedProductCount: number = 0;

  updateLikedProductCount(count: number) {
    this.likedProductCount += count;
  }
  // Method to receive selected category IDs from CategoryComponent if needed
  onCategorySelectionChanged(selectedCategoryIds: number[]) {
    this.selectedCategoryIds = selectedCategoryIds;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/