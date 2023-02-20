import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

  //   const items: Item[] = [
  //     {
  //       title: 'lecturas',
  //       subitems: [
  //         {
  //           path: '/',
  //           text: 'lectura 1'
  //         },
  //         {
  //           path: '/',
  //           text: 'lectura 2'
  //         },
  //         {
  //           path: '/',
  //           text: 'lectura 3'
  //         },
  //         {
  //           path: '/',
  //           text: 'lectura 4'
  //         },
  //       ]
  //     },

  //     {
  //       title: 'videos',
  //       subitems: [
  //         {
  //           path: '/',
  //           text: 'video 1'
  //         },
  //         {
  //           path: '/',
  //           text: 'video 2'
  //         },
  //         {
  //           path: '/',
  //           text: 'video 3'
  //         },
  //         {
  //           path: '/',
  //           text: 'video 4'
  //         },
  //       ]
  //     },
  //     {
  //       title: 'cursos',
  //       subitems: [
  //         {
  //           path: '/',
  //           text: 'curso 1'
  //         },
  //         {
  //           path: '/',
  //           text: 'curso 2'
  //         },
  //         {
  //           path: '/',
  //           text: 'curso 3'
  //         },
  //         {
  //           path: '/',
  //           text: 'curso 4'
  //         },
  //       ]
  //     },

  //   ]
    
  //  // this.menuService.menuItems = items;

  }

}
