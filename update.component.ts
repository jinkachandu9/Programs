import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
@Input() minorP:number;
  constructor() { 
   
  }

  ngOnInit() {
    console.log(this.minorP);
  }

}
