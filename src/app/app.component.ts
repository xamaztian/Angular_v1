import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'Hola Mundial Angular! desde componente';

  subtitle: string = 'Contador con estado de sesión que viene desde componente padre';

  users: string[] = ['Juan', 'María', 'Luis', 'Pepe'];

  visible : boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    this.counter = sessionStorage.getItem('counter') != undefined ? parseInt(sessionStorage.getItem('counter')!) : 0;
  }

  setVisible() : void{
    this.visible = !this.visible;
    console.log("Hicimos Click en Set visible");
  }

  setCounter(event:number) :void{
    this.counter = event;

  }

}
