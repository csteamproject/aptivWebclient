import {
  Component,
  OnInit
} from '@angular/core';
import {
  ItemsService
} from '../../services/items/items.service';
import {
  Item
} from '../../classes/item/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  Items: Item[] = [];
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe((data: Item[]) => {
      this.Items = data;
    });
  }
}
