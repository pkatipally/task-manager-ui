import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient){}

  getUser(){
    return this.http.get("http://localhost:9090/tasklogging/userTaskDetails")
      .pipe(res => res);
  }
}
