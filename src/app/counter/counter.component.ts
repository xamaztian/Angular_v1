import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  @Input() title!: string;

  ngOnInit(): void {

    this.counter = sessionStorage.getItem('counter') != undefined ? parseInt(sessionStorage.getItem('counter')!) : 0;
    console.log('creando componente');
  }

  setCounter(): void {
    this.counter++;

    sessionStorage.setItem('counter', this.counter.toString());
  }
}
