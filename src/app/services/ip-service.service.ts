import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http:HttpClient) { }

  // getLocation():Promise<any>{
  //   return new Promise((resolve, reject)=>{
  //     navigator.geolocation.getCurrentPosition(resp=>{
  //       resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
  //     })
  //   })
  // }

  public getIpAddress() {
    //console.log(this.http.get("http://api.ipify.org/?format=json"));
    return this.http.get("http://api.ipify.org/?format=json");
  }

  
}
