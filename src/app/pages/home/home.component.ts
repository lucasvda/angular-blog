import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home-responsive.component.css']
})
export class HomeComponent {
	photo: string= ""
	photoAlt: string= ""
	subject: string = ""
	idPagina:string = "1"

	ngOnInit() {
		this.setValues(this.idPagina)
	}
	setValues(id:string){
		const result = dataFake.filter(value => value.id == id)[0]
		this.photo = result.photo
		this.photoAlt = result.photoAlt
		this.subject = result.subject
	}
}
