import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cutomers',
  templateUrl: './cutomers.component.html',
  styleUrls: ['./cutomers.component.css']
})
export class CutomersComponent implements OnInit{

  customers :any;
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/customer-service/customers?projection=fullCustomer")
      .subscribe({
        next : (data)=>{
          this.customers=data;
        },
        error : (err)=>{}
      });
  }

  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id);
  }

}
