import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      title: 'Breakfast at Tiffany\'s',
      gif: 'https://media1.giphy.com/media/xvLGczTABDig0/giphy.gif',
    }
  ];

  constructor() { }
}