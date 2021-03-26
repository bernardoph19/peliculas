import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../Interfaces/interface.noticias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  noticias: Article[] = [];
  constructor(private NoticiasService: NoticiasService) {}

  ngOnInit(){

  this.NoticiasService.getTopHeadlines().subscribe( resultado => {
    console.log('Noticias' , resultado);

    this.noticias.push(...resultado.articles);

  });

  }
}
