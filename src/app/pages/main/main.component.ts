import { Component, OnInit } from '@angular/core';
import { Developer } from '../../classes/developer';
import { DevelopersService } from '../../services/developers/developers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  developers: Developer[];

  constructor(private developersService: DevelopersService) {
  }

  ngOnInit() {
    this.developersService.getDevelopers()
    .subscribe(data => {
      this.developers = data;
      console.log('this.Developers', this.developers);
    });

  }

}
