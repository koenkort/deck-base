import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private httpService: HttpClient) {}

  getDecks(){
    return this.httpService.get("localhost:8080/api/book");
  }
}
