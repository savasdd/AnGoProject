import {Injectable} from '@angular/core';
import {ProfileModule} from './profile-edit/profile-module';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditService {

  constructor() {
  }

  saveProfile(profile: ProfileModule) {
  }

  getProfile(userId: number): ProfileModule {
    return {
      ad: 'Savaş',
      soyad: 'Dede',
      dogumTarihi: new Date(),
      gmail: 'svsdd22@gmail.com',
      kullaniciAdi: 'sdede'
    };
  }
}
