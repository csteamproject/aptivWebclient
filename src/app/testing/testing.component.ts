import { Component, OnInit } from '@angular/core';
import { Developer } from '../classes/developer';
import { DevelopersService } from '../services/developers/developers.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private developersService: DevelopersService) { }

  developers: Developer[];

  ngOnInit() {
    this.developersService.getDevelopers()
    .subscribe(data => {
      this.developers = data;
      console.log('this.Developers', this.developers);
    });
  }

}
