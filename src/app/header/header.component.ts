import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as _ from 'lodash';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{

  public jsonURL = 'assets/SampleJson.json';
  showFiller = false;

  public values :any;
  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.getJSONs();
  }

  public getJSONs() {
    return this.http.get(this.jsonURL).subscribe((data:any)=>{
      this.values= data.header;
    })
  }

}
