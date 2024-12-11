import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from "@angular/forms";
import { Pet } from '../../models/pet';

@Component({
  selector: "app-pet",
  imports: [CommonModule, FormsModule],
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
  providers: [PetService, CommonModule],
})

export class PetComponent implements OnInit {
  constructor(public petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe({
      next: (res) => {
        this.petService.pets = res; // Manejo de la respuesta exitosa
      },
      error: (err) => {
        console.error(err); // Manejo de errores
      },
      complete: () => {
        console.log('Carga de mascotas completada.'); // (Opcional) Cuando se completa
      },
    });
  }

  addPet(form?: NgForm) {
    if (form?.value._id) {
      this.petService.putPet(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getPets();
      });
    } else {
      this.petService.postPet(form?.value).subscribe((res) => {
        this.getPets();
        this.resetForm(form);
      });
    }
  }

  editPet(pet: Pet) {
    this.petService.selectedPet = pet;
  }

  deletePet(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.petService.deletePet(_id).subscribe((res) => {
        this.getPets();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.petService.selectedPet = new Pet();
    }
  }


}
