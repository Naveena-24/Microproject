import { Component } from '@angular/core';
import { HealthcareService } from './healthcare.service';
import { Healthcare } from './model/Healthcare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MicroProject1';
  healthcare: Healthcare;
  result: string;
  healthcareArr :Healthcare[];
  flag :boolean;

constructor(private service : HealthcareService){
  this.healthcare=new Healthcare();
  this.result ="";
  this.healthcareArr =[];
  this.flag=false;
}
insertHealthcare(data: any) {
  this.healthcare.id=data.patientId;
  this.healthcare.patientName=data.patientName;
  this.healthcare.patientMoblie=data.patientMobile;
 

   this.result=this.service.insertHealthcare(this.healthcare);
}  
updateHealthcare(data: any) {
  this.healthcare.id=data.patientId;
  this.healthcare.patientName=data.patientName;
  this.healthcare.patientMoblie=data.patientMobile;
  
  this.result=this.service.updateHealthcare(this.healthcare);
}
deleteHealthcare(data :any) {
  this.result=this.service.deleteHealthcare(data.patientId);
}
findHealthcare(data : any){
  this.healthcare=this.service.findHealthcare(data.patientId);
  this.result=this.healthcare.id+ " "+this.healthcare.patientName+" "+this.healthcare.patientMoblie;
}
findAllHealthcare(){
  this.healthcareArr=this.service.findAllHealthcare();
  this.flag=true;

}
}
