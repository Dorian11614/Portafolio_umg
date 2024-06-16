import {Component} from '@angular/core';
import {ProjectCardComponent} from "../project-card/project-card.component";
import {CardData} from "../models/card-data";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    ProjectCardComponent,
    NgTemplateOutlet
  ],
  standalone: true
})
export class PortfolioComponent {
  cards: Array<CardData> = new Array<CardData>();

  constructor() {

    const SimplyChessCard: CardData = {
      title: "Calculadora-umg",
      description: "Este repositorio contiene el código fuente para una calculadora simple desarrollada en Java. La aplicación permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división." +
        "Es un proyecto ideal para quienes están aprendiendo Java y desean entender cómo construir una aplicación de consola interactiva.",
      sourceCodeLink: "https://github.com/shackGerc/Simply-Chess",
      createdWith: ["JAVA"],
      imageSrc: "assets/projects/2.jpeg"
    } as CardData

    const InventoryApiCard: CardData = {
      title: "Conversor de Temperaturas en C++",
      description: "Este es un sencillo programa en C++ que permite convertir temperaturas entre diferentes unidades: Celsius, Fahrenheit y Kelvin." +
        "Características: Convierte temperaturas de Celsius a Fahrenheit y Kelvin." +
        "Convierte temperaturas de Fahrenheit a Celsius y Kelvin." +
        "Convierte temperaturas de Kelvin a Celsius y Fahrenheit.",
      sourceCodeLink: "https://github.com/Dorian11614/Conversor-de-Temperaturas-.git",
      createdWith: ["C++"],
      imageSrc: "assets/projects/1.png"
    } as CardData

    this.cards.push(SimplyChessCard);
    this.cards.push(InventoryApiCard)
  }
}
