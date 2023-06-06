import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeBackgroundComponent } from './home-background.component';
import { CarsService } from 'src/app/services/cars.service';


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
});
