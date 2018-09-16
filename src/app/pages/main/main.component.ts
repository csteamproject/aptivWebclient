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
   testData: Object[] = [];

  constructor(private developersService: DevelopersService) {
    this.testData = [{
      ID: 1,
      Item: 'Computer',
      Description: 'HP laptop',
      Updated: new Date(),
      Region: 'Mexico',
      Action: 'View | Delete',
      Comments: '',
    },
    {
      ID: 2,
      Item: 'Computer',
      Description: 'HP laptop',
      Updated: new Date(),
      Region: 'Mexico',
      Action: 'View | Delete',
      Comments: ''
    },
    {
    ID: 3,
    Item: 'Computer',
    Description: 'HP laptop',
    Updated: new Date(),
    Region: 'Mexico',
    Action: 'View | Delete',
    Comments: ''
  },
  {
  ID: 4,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 5,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 6,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 7,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 8,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 9,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 10,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 11,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 12,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 13,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
  ID: 14,
  Item: 'Computer',
  Description: 'HP laptop',
  Updated: new Date(),
  Region: 'Mexico',
  Action: 'View | Delete',
  Comments: ''
},
{
ID: 15,
Item: 'Computer',
Description: 'HP laptop',
Updated: new Date(),
Region: 'Mexico',
Action: 'View | Delete',
Comments: ''

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
    //   Updated: new Date(),
    //   Action: 'View | Delete'
    }];
  }

  ngOnInit() {
    this.developersService.getDevelopers()
    .subscribe(data => {
      this.developers = data;
      console.log('this.Developers', this.developers);
    });
  }

}
