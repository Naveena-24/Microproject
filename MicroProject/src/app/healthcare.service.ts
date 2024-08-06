import { Injectable } from '@angular/core';
import { Healthcare } from './model/Healthcare';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {
  url:string;
  healthcare:Healthcare;
  healthcareArr:Healthcare[];

  constructor(private http: HttpClient){
    this.url="http://localhost:3006/healthcare";
    this.healthcare=new Healthcare();
    this.healthcareArr=[];
  }
  
  insertHealthcare(healthcare : Healthcare){
    this.http.post<Healthcare>(this.url,healthcare).subscribe();
    return "Healthcare Details Added";
   }

   updateHealthcare(healthcare :Healthcare ){
    this.http.put<Healthcare>(this.url+"/"+healthcare.id,healthcare).subscribe();
    return "Healthcare Details update";
   }
   deleteHealthcare(patientId : number){
    this.http.delete<Healthcare>(this.url+"/"+patientId).subscribe();
    return "Healthcare Details delete";
   }
   findHealthcare(patientId: string){
    this.http.get<Healthcare>(this.url+"/"+patientId).subscribe(data => this.healthcare = data);
    return this.healthcare;
  }
  findAllHealthcare(){
    this.http.get<Healthcare[]>(this.url).subscribe(data => this.healthcareArr = data);
    return this.healthcareArr;
   }
}
