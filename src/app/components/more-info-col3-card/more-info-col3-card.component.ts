import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-info-col3-card',
  templateUrl: './more-info-col3-card.component.html',
  styleUrls: ['./more-info-col3-card.component.css']
})
export class MoreInfoCol3CardComponent {
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
