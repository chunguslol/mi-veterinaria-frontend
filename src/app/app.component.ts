import { Component } from '@angular/core';
import { PetComponent } from './components/pet/pet.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PetComponent]
})
export class AppComponent {
}
