import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-more-info',
	templateUrl: './more-info.component.html',
	styleUrls: [
		'./more-info.component.css',
		'more-info-responsive.component.css',
	],
})
export class MoreInfoComponent {
	@Input()
	photoCover: string = '';
	@Input()
	altText: string = '';
	@Input()
	subject: string = '';
	@Input()
	title: string = '';
	@Input()
	description: string = '';

	@Input() idPagina4: string = '5';
	@Input() idPagina5: string = '6';
	@Input() idPagina6: string = '7';
	@Input() idPagina7: string = '8';
	@Input() idPagina8: string = '9';
	@Input() idPagina9: string = '10';
	@Input() idPagina10: string = '11';
	@Input() idPagina11: string = '12';
	@Input() idPagina12: string = '13';
	@Input() idPagina13: string = '14';
	@Input() idPagina14: string = '15';
	@Input() idPagina15: string = '16';

	itemValue: any[] = [];

	ngOnInit() {
		this.itemValue.push(this.getValues(this.idPagina4));
		this.itemValue.push(this.getValues(this.idPagina5));
		this.itemValue.push(this.getValues(this.idPagina6));
		this.itemValue.push(this.getValues(this.idPagina7));
		this.itemValue.push(this.getValues(this.idPagina8));
		this.itemValue.push(this.getValues(this.idPagina9));
		this.itemValue.push(this.getValues(this.idPagina10));
		this.itemValue.push(this.getValues(this.idPagina11));
		this.itemValue.push(this.getValues(this.idPagina12));
		this.itemValue.push(this.getValues(this.idPagina13));
		this.itemValue.push(this.getValues(this.idPagina14));
		this.itemValue.push(this.getValues(this.idPagina15));
	}
	getValues(id: string): string[] {
		const result = dataFake.filter((value) => value.id == id)[0];
		const data: string[] = [];
		data.push(result.photo);
		data.push(result.photoAlt);
		data.push(result.subject);
		data.push(result.title);
		data.push(result.description);
		return data;
	}
}
