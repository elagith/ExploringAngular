import {Component} from "@angular/core";
import {EngineService} from "./gameplay/engine.service";
import {Http} from "@angular/http";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService){
    translate.use("es");
  }
}
