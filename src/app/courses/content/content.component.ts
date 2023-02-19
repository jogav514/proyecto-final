import { Component, Input } from '@angular/core';
import { SubItem } from '../subitem';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
    @Input() text: string = '';
  @Input() title :string='';
  @Input() items : SubItem[] =[];
  
}
