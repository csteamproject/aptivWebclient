import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Data {
  Name: string;
  Description: string;
  Cost: number;
  Author: string;
  DeleteDT?: Date;

  constructor() {
      this.DeleteDT = null;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'aptivWebclient';
  // DELETE THIS AS SOON AS WE HAVE AN IDEA OF WHAT TO DO< DOESNT USUALLY GO HERE
  data: Data[];
  constructor(private http: HttpClient) {

  }
  ngOnInit() {

    this.http.get('http://0.0.0.0:3000/developers')
    .subscribe((res: Data[]) => {
      console.log('HomeComponent --', res);
      // let Result: Data[] = temp;
      this.data = res;
      console.log('data: ', this.data);
    }, (error) => {
      console.log('There was an error', error);
    });


    // this.data = this.dataService.getData();
    // console.log('this.data', this.data);
  }
}
