import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-col2-card',
  templateUrl: './main-col2-card.component.html',
  styleUrls: ['./main-col2-card.component.css', 'main-col2-card-responsive.component.css']
})
export class MainCol2CardComponent {

	@Input()
	photoCover:string = ""
	@Input()
	altText:string = ""
	@Input()
	subject:string = ""
	@Input()
	title:string = ""
	@Input()
	description:string = ""
}
