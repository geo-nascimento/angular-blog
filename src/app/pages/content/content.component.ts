import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
	private id:number= 0;

	@Input() photoCover: string = '';
	@Input() contentTitle: string = '';
	@Input() contentDescription: string = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		//Ttudo isso pra poder pegar os parâmetros passados na url
		this.route.paramMap.subscribe(
			(value) => (this.id = Number(value.get('id')))
		);

		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id:number): void {
		const result = dataFake.filter(article => article.id === id)[0];

		this.contentTitle = result.title;
		this.contentDescription = result.description
		this.photoCover = result.photoCover
	}
}
