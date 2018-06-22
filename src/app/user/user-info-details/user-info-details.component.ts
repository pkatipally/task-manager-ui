import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css']
})
export class UserInfoDetailsComponent {
  private genderList: string[];
  //Property for the user

  ngOnInit() {

    this.genderList =  ['Male', 'Female', 'Others'];


  }
}
