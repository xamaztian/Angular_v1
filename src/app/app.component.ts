import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Mundial Angular! desde componente';

  subtitle: string = 'Contador con estado de sesión que viene desde componente padre';

  users: string[] = ['Juan', 'María', 'Luis', 'Pepe'];

  visible : boolean = false;

  setVisible() : void{
    this.visible = !this.visible;
    console.log("Hicimos Click en Set visible");
  }

}
