import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customersearch',
  templateUrl: './customersearch.component.html',
  styleUrls: ['./customersearch.component.css']
})
export class CustomersearchComponent implements OnInit {
custId:number;
customer:Observable<Customer>
  constructor(private _customerService :CustomerService) { }

  search(){
    this.customer=this._customerService.searchCustomer(this.custId)
  }
  ngOnInit(): void {
  }

}
