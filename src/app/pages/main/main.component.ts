import { Component, OnInit } from '@angular/core';
import { Developer } from '../../classes/developer';
import { DevelopersService } from '../../services/developers/developers.service';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../classes/item/item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  developers: Developer[] = [];
   testData: Object[] = [];
   item: Item[] = [];

  constructor(private itemsService: ItemsService) {
  //   this.itemsService.getItems()
  //  .subscribe(data => {
  //     this.item = data;
  //     console.log('this.item', this.item);
  //   });
  }


  ngOnInit() {
    this.itemsService.getItems()
    .subscribe(data => {
      this.item = data;
      console.log('this.Item', this.item);
    });
  }

}
