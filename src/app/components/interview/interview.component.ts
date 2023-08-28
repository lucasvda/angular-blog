import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css', 'interview-responsive.component.css']
})
export class InterviewComponent {

@Input() photo:string = ""
@Input() photoAlt:string = ""
@Input() title:string = ""
@Input() description:string = ""
@Input() idPagina16:string = "17"

ngOnInit() {
	this.setValues(this.idPagina16)
}

setValues (id:string) {
	const result = dataFake.filter(value => value.id == id)[0]
	this.photo = result.photo
	this.photoAlt = result.photoAlt
	this.title = result.title
	this.description = result.description

}

}
