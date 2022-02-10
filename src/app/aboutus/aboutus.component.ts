import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  
  isDisplay=false;
  MotherTeresa:boolean=false;
  IndiraGandhi:boolean=false;
  PratibhaPatil:boolean=false;
  KalpanaChawla:boolean=false;
  KiranBedi:boolean=false;
  MithaliRaj:boolean=false;
  ArunimaSinha:boolean=false;
  ShilaDawre:boolean=false;
  RoshniSharma:boolean=false;
  FathimaBeevi:boolean=false;
  SaniaMirza:boolean=false;
  SainaNehwal:boolean=false;
  constructor() { }
  ngOnInit(): void {
  }
onclick(){
this.MotherTeresa=true;
}
onclick2(){
this.  IndiraGandhi=true;
}
onclick3(){
this.PratibhaPatil=true;
}
onclick4(){
this. KalpanaChawla=true;
}
onclick5(){
this. KiranBedi=true;
}
onclick6(){
this.MithaliRaj=true;
}

onclick7(){
this.ArunimaSinha=true;
}
onclick8(){
this.ShilaDawre=true;
}
onclick9(){
this.RoshniSharma=true;
}
onclick10(){
this.FathimaBeevi=true;
}
onclick11(){
this.SaniaMirza=true;
}
onclick12(){
this.SainaNehwal=true;
}
Cancel(){
  this.MotherTeresa=false;
}

Cancel2(){
  this.  IndiraGandhi=false;
}
Cancel3(){
  this.PratibhaPatil=false;
}
Cancel4(){
  this.KalpanaChawla=false;
}

Cancel5(){
  this.KiranBedi=false;
}
Cancel6(){
  this.MithaliRaj=false;
}
Cancel7(){
  this.ArunimaSinha=false;
}
Cancel8(){
  this.ShilaDawre=false;
}
Cancel9(){
  this.RoshniSharma=false;
}
Cancel10(){
  this.FathimaBeevi=false;
}
Cancel11(){
  this.SaniaMirza=false;
}
Cancel12(){
  this.SainaNehwal=false;
}
}
