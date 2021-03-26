
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoespuestaTopHeadlines } from '../Interfaces/interface.noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RoespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f82ebb89e4274d71ba55c6ac5008080d`);
  }

}
