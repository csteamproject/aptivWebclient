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
  fileToUpload: any;
  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.locationsService.getLocations().subscribe((data: Location[]) => {
      this.Locations = data;
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload !== null) {
    console.log('the file ' + files.item(0));
    console.log('size ' + this.fileToUpload.name);
    const reader = new FileReader();
    reader.onload = () => {
    console.log(reader.result);
  };
  console.log('reading');
  console.log('read: ' + reader.readAsText(this.fileToUpload));
  // console.log(reader.readAsText(this.fileToUpload));
}
  }
}
