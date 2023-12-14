import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent {
	@Input() photoCover: string ='https://s2-g1.glbimg.com/gfbYenNYPcRC7QsbGYe1g7CMigc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/f/T/jp2BlqRXCZSQFovcKPDA/samuraix.jpg';
	@Input() contentTitle: string = 'Samurai X';
	@Input() contentDescription: string = 'Melhor anime já criado';
}
