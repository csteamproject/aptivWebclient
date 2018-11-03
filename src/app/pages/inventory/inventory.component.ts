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
import { PageinationService } from 'src/app/services/pageination/pageination.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  Items: Item[] = [];
  pager: any = {};
  pagedItems: Item[];
  constructor(private itemsService: ItemsService, private pagerService: PageinationService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(data => {
      const items: Item[] = Item.DeseralizeMany(data.map((obj: Item) => ({
        Name: obj.name,
        Price: obj.price,
        Quantity: obj.quantity
      })));
      this.Items = items;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.Items.length, page);
    this.pagedItems = this.Items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
