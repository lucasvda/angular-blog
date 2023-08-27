import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
@Input()
photoCover:string = "assets/images/spiderman-big-card.jpg"
altText:string = "Spider-Man"
}
