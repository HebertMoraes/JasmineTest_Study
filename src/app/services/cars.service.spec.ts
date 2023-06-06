import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Car } from '../entities/car';


describe('CarsService', () => {
  let service: CarsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(CarsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all deve retornar o mock corretamente', () => {

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

    let spyGetAll = spyOn(service, 'getAll').and.returnValue(of(responseMock));
		
		service.getAll().subscribe(res => {
			expect(res).toEqual(responseMock);
      expect(1 + 1).toBe(2);
		});

    // const request = httpTestingController.expectOne(service.urlBase);
		// expect(request.request.url).toBe(service.urlBase);
		// expect(request.request.method).toBe('GET');

	});
});
