import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pet } from "../models/pet";


@Injectable({
  providedIn: 'root'
})
export class PetService {

  selectedPet: Pet;
  pets: Pet[];
  readonly URL_API = 'http://localhost:4000/api/pets';

  constructor(private http: HttpClient) {
    this.selectedPet = new Pet();
    this.pets = []; 
  }

  postPet(pet: Pet) {
    return this.http.post(this.URL_API, pet);
  }

  getPets() {
    return this.http.get<Pet[]>(this.URL_API);
  }

  putPet(pet: Pet) {
    return this.http.put(this.URL_API + `/${pet._id}`, pet);
  }

  deletePet(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
