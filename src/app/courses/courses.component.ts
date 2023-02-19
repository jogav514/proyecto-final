import { Component, Input } from '@angular/core';
import { Item } from './item';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

items: Item[] = [
{
  title:'lecturas',
  subitems:[
    {
      path:'/',
      text: 'lectura 1'
    },
    {
      path:'/',
      text: 'lectura 2'
    },
    {
      path:'/',
      text: 'lectura 3'
    },
    {
      path:'/',
      text: 'lectura 4'
    },
  ]
},

{
  title:'videos',
  subitems:[
    {
      path:'/',
      text: 'video 1'
    },
    {
      path:'/',
      text: 'video 2'
    },
    {
      path:'/',
      text: 'video 3'
    },
    {
      path:'/',
      text: 'video 4'
    },
  ]
},
{
  title:'cursos',
  subitems:[
    {
      path:'/',
      text: 'curso 1'
    },
    {
      path:'/',
      text: 'curso 2'
    },
    {
      path:'/',
      text: 'curso 3'
    },
    {
      path:'/',
      text: 'curso 4'
    },
  ]
},

]
}
