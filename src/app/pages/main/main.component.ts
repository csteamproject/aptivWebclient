import { Component, OnInit } from '@angular/core';
import { Developer } from '../../classes/developer';
import { DevelopersService } from '../../services/developers/developers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  developers: Developer[] = [];
  // developers: Object[] = [];

  constructor(private developersService: DevelopersService) {
    // this.developers = [{
    //   ID: 1,
    //   Name: 'Jonathan Steele',
    //   Role: 'Programmer',
    //   Age: 21,
    //   Updated: new Date(),
    // }, {
    //   ID: 2,
    //   Name: 'Zachary Morgan',
    //   Role: 'Programmer',
    //   HairColor: 'black',
    //   Updated: new Date()
    // }, {
    //   ID: 3,
    //   Name: 'Gilbert Carrillo',
    //   Role: 'Programmer',
    //   Updated: new Date()
    // }];
  }

  ngOnInit() {
    this.developersService.getDevelopers()
    .subscribe(data => {
      this.developers = data;
      console.log('this.Developers', this.developers);
    });
  }

}
