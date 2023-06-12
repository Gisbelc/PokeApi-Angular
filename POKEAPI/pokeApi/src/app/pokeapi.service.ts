import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPokemons(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
