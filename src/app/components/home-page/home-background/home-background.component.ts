import { Component } from '@angular/core';
import { Car } from 'src/app/entities/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.sass']
})
export class HomeBackgroundComponent {

  carsToShow!: Car[];

  constructor(
    private carService: CarsService, 
    private authService: AuthenticationService
    ) {

  }

  logar() {
    this.authService.signInWithEmailPassword("emailtesteuser@gmail.com", "1234").subscribe({
      complete: () => {
        console.log("logado!!");
      },
      error: (err) => {
        console.log("erro ao logar");
      }
    });
  }

  showAllCars() {
    this.carService.getAll().subscribe({
      next: (cars) => {
        this.carsToShow = cars;
      },
      error: (err) => {
        console.log("3");
        if (err === "Token inválido") {
          console.log("4");
          this.authService.updateAcessToken().subscribe({
            complete: () => {
              console.log("6");
              this.carService.getAll().subscribe({
                next: (cars) => {
                  console.log("7");
                  this.carsToShow = cars;
                },
                error: (err) => {
                  console.log("deu ruim");
                }
              });
            },
            error: (err) => {
              console.log("deu ruim");
            }
          });
        } else {
          console.log("deu ruim");
        }
      }
    });
  }

}
