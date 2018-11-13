import {
  Component,
  OnInit
} from '@angular/core';
import {
  LocationsService
} from '../../services/locations/locations.service';
import {
  Location
} from '../../classes/location/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  Locations: Location[] = [];
  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.locationsService.getLocations().subscribe((data: Location[]) => {
      this.Locations = data;
    });
  }
}
