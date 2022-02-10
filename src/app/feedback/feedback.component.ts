import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  SendData(dataFormForm:NgForm){
console.log("data of the form", dataFormForm.value);
  }
  constructor() { }
  
  ngOnInit(): void {

    
  }
isNumber(evt:any) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
