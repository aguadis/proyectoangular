import { Component, OnInit } from '@angular/core';
import { Persona } from '../entidades/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: Persona[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
