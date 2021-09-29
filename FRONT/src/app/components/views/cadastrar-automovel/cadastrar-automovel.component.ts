import { Automovel } from './../../../models/automovel';
import { AutomovelService } from './../../../services/automovel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-automovel',
  templateUrl: './cadastrar-automovel.component.html',
  styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {

  marca !: string; 
  cor !: string; 
  modelo !: string; 
  cambio !: string;
  ano !: number;
  constructor(private router: Router, private service : AutomovelService) { }

  ngOnInit(): void {
  }
  cadastrar(): void{
    let automovel: Automovel = {
      marca: this.marca,
      cor: this.cor,
      modelo: this.modelo,
      cambio: this.cambio,
      ano: this.ano,
    };
    this.service.create(automovel).subscribe((automovel) => {
    console.log(automovel);
    this.router.navigate(["automovel/listar"]);
});  
  }

}
