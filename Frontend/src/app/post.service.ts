import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './IPost';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private readonly apiUrl = "https://localhost:44316/"

  private postUrl = this.apiUrl + "post/all"

  GetPosts(): Observable<Post[]>
  {
    
    return this.http.get<Post[]>(this.postUrl);
  }

  constructor(private http: HttpClient) { }
}
