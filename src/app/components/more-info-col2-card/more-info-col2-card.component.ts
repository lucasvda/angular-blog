import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-info-col2-card',
  templateUrl: './more-info-col2-card.component.html',
  styleUrls: ['./more-info-col2-card.component.css']
})
export class MoreInfoCol2CardComponent {
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
