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
    this.locationsService.getLocations().subscribe(data => {
      const locations: Location[] = Location.DeseralizeMany(data.map((obj: Location) => ({
        ID: obj.id,
        Unit: obj.unit,
        Building: obj.building,
        Steet: obj.street,
        City: obj.city,
        Region: obj.region,
        Country: obj.country,
        Address_code: obj.address_code
      })));
      this.Locations = locations;
    });
  }
}
