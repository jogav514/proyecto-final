import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItemsObservable: Observable<Item[]>=new Observable((subscriber)=>{
   
   setTimeout(()=>{
    const items: Item[] = [
      {
        title: 'lecturas',
        subitems: [
          {
            path: '/',
            text: 'lectura 1'
          },
          {
            path: '/',
            text: 'lectura 2'
          },
          {
            path: '/',
            text: 'lectura 3'
          },
          {
            path: '/',
            text: 'lectura 4'
          },
        ]
      },

      {
        title: 'videos',
        subitems: [
          {
            path: '/',
            text: 'video 1'
          },
          {
            path: '/',
            text: 'video 2'
          },
          {
            path: '/',
            text: 'video 3'
          },
          {
            path: '/',
            text: 'video 4'
          },
        ]
      },
      {
        title: 'cursos',
        subitems: [
          {
            path: '/',
            text: 'curso 1'
          },
          {
            path: '/',
            text: 'curso 2'
          },
          {
            path: '/',
            text: 'curso 3'
          },
          {
            path: '/',
            text: 'curso 4'
          },
        ]
      },

    ]
    subscriber.next(items);
    subscriber.complete();
    console.log('items loaded');
   },1000)
    
  });
  constructor() { }
}
