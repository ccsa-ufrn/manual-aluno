import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Main } from '../Main/main';

@Component({
  selector: 'vcparticipa',
  templateUrl: 'vcparticipa.html'
})
export class VcParticipa {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
