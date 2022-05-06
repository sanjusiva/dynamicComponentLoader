import { Component } from '@angular/core';
import { DangerComponent } from './danger/danger.component';
import { SuccessComponent } from './success/success.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicComponentLoader';
  alert=SuccessComponent
  switchAlert()
  {
    if(this.alert==SuccessComponent){
      this.alert=DangerComponent
    }
    else{
      this.alert=SuccessComponent
    }
  }
}
