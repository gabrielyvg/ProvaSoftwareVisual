import { AutomovelService } from './services/automovel.service';
import { Automovel } from './models/automovel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app-component.css']
})
export class AppComponent implements OnInit {
  automoveis : Automovel[] = [];

  constructor(private service : AutomovelService){}

  ngOnInit() : void{
    this.service.list().subscribe(automoveis => {
      this.automoveis = automoveis;
    })
  }


}
