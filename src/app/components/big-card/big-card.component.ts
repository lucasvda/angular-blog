import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

@Input()
id:string = "1"
@Input()
photoCover:string = ""
@Input()
altText:string = ""
@Input()
subject:string = ""

}
