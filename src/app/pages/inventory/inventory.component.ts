import { Component, OnInit } from '@angular/core';
import { Developer } from '../../classes/developer';
import { DevelopersService } from '../../services/developers/developers.service';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../classes/item/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  developers: Developer[] = [];
   testData: Object[] = [];
   item: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(data => {
      // console.log('this.Item', this.item);
      this.item = data;
    });
  }

}
