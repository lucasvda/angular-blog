import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
private id:string | null= ""
photo:string = ""
photoAlt:string = ""
subject:string = ""
title:string = ""
description:string = ""

	constructor(private route: ActivatedRoute) {

	}
	ngOnInit(): void {
		this.route.paramMap.subscribe(value => this.id = value.get("id"))
		this.setValuesToContent(this.id)
	}
	setValuesToContent(id:string | null) {
		const result = dataFake.filter(article => article.id == id)[0]
		this.photo = result.photo
		this.photoAlt = result.photoAlt
		this.subject = result.subject
		this.title = result.title
		this.description = result.description
	}
}
