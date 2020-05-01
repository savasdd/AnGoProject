import {Component, OnInit} from '@angular/core';
import {ProfileModule} from './profile-module';
import {ProfileEditService} from '../profile-edit.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profile: ProfileModule;

  constructor(private service: ProfileEditService) {
  }

  ngOnInit(): void {
    this.profile = this.service.getProfile(1);
  }

}
