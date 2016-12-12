// importando component y como nos vamos a comunicar a traves de un atributo, llamamos al declarador Input
import { Component, Input } from '@angular/core'
import {Course} from '../common/course'

@Component({
	selector: 'coursebox',
	template:
	`
		<div class="course">
			<img [src]="course.image">
			<h2>{{course.name}}</h2>
			<span class="price">
				{{course.price | currency: 'USD':true: '1.2-2'}}
			</span>
			<button>Agregar al carrito</button>
		</div>
	`
})

export class CourseBoxComponent {
	// declarador input antes de la variable, lo que nos permite definir como un atributo del componente que vamos a generar
	@Input()
	course: Course
}
