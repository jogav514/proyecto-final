import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';
import { MenuService } from '../menu.service';
import { SubItem } from '../subitem';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  implements OnInit{
  items:Item[]=[];

  constructor(private menuService:MenuService){}
  
  ngOnInit(): void {
    this.menuService.menuItemsObservable.subscribe((items)=>{
        this.items = items;
      }
    );
  }
}
