import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeBackgroundComponent } from './home-background.component';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/entities/car';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('HomeBackgroundComponent', () => {
	let component: HomeBackgroundComponent;
	let fixture: ComponentFixture<HomeBackgroundComponent>;
	let service: CarsService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeBackgroundComponent],
			imports: [HttpClientTestingModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HomeBackgroundComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		service = TestBed.inject(CarsService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('showAllCars deve alterar o texto dos paragrafos para o nome dos carros retornados', () => {

		let car1 = new Car(
			1,
			"Honda Fit",
			"Honda",
			2014,
			"carro popular usado 5",
			7000,
			11000,
			19000,
			"2023-04-09T03:00:00.000Z",
			"https://firebasestorage.googleapis.com/v0/b/crud-cars-sales.appspot.com/o/honda-fit.jpg?alt=media&token=fb36edb8-bb9b-4f75-bbb1-b9d0b387ea65",
			"2023-05-11T13:02:08.867Z",
			"2023-05-11T13:02:08.867Z",
			"2023-05-11T13:02:08.867Z"
		);
		let responseMock = [
			car1
		];

		fixture.detectChanges();
		expect(component.paragraphs.toArray().length).toBe(0);

		spyOn(service, 'getAll').and.returnValue(of(responseMock));

		component.showAllCars();
		fixture.detectChanges();
		expect(component.paragraphs.toArray()[0].nativeElement.innerText).toBe("Honda Fit");
	});
});
