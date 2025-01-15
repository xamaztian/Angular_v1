import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Mundial Angular! desde componente';

  users: string[] = ['Juan', 'María', 'Luis', 'Pepe'];

  visible : boolean = false;

  setVisible() : void{
    this.visible = !this.visible;
    console.log("Hicimos Click en Set visible");
  }

}
