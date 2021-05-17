import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  company : string;
  empArray = [
    new Employ(1, "Brahma","Angular","Programmer",4555),
    new Employ(3,"Bikash","Java","Developer",92344),
    new Employ(4,"Lakshman","Sql","Programmer",67333),
    new Employ(5,"Sairam","Selenium","Tester",56555),
    new Employ(6,"Mahesh","Angular","Expert",66444),
    new Employ(7,"Usha","Dotnet","Developer",65433),
    new Employ(8,"Varsha","Dotnet","Architect",54334)
  ]
  constructor() {
    this.company = localStorage.getItem("company");
   }

  ngOnInit() {
  }

}
