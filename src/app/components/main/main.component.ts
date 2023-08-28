import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', 'main-responsive.component.css']
})
export class MainComponent {

@Input() idPagina1:string = "2"
@Input() idPagina2:string = "3"
@Input() idPagina3:string = "4"

itemValue:any[] = []

ngOnInit(){
	this.itemValue.push(this.getValues(this.idPagina1))
	this.itemValue.push(this.getValues(this.idPagina2))
	this.itemValue.push(this.getValues(this.idPagina3))
}
getValues(id:string): string[] {
	const result = dataFake.filter(value => value.id == id)[0]
	const data: string[] = []
	data.push(result.photo)
	data.push(result.photoAlt)
	data.push(result.subject)
	data.push(result.title)
	data.push(result.description)
	return data
}
}
