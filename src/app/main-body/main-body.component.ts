import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})

export class MainBodyComponent {

  // tiles =['Form','Table','Uploading','Downloading','Form','Table','Uploading','Downloading'];
   tiles =[{"title":'Form', "path":"one"},{"title":'table', "path":"two"}];


}
