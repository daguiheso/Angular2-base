import { Component } from '@angular/core';
import {Course} from '../common/course'


const COURSES: Course[] = [
	{
		id: 1,
		name: 'Angular2',
		image: 'https://static.platzi.com/media/files/angular.png',
		price: 900
	},
	{
		id: 2,
		name: 'Python',
		image: 'https://static.platzi.com/media/files/python.png',
		price: 1200
	}
]


@Component({
	selector: 'courses',
	template:
	`
		<h2>{{title}}</h2>
		<div class="courses_list">
			<div class="course" *ngFor="let course of courses">
				<img [src]="course.image">
				<h2>{{course.name}}</h2>
				<span class="price">
					{{course.price | currency: 'USD':true: '1.2-2'}}
				</span>
				<button>Agregar al carrito</button>
			</div>
		</div>
	`
})

export class CoursesComponent {
	title: string = 'Cursos disponibles'
	courses: Course [] = COURSES
}
