export class Pet {
    constructor(_id = "", name = "", race = "", color = "", age = 0) {
        this._id = _id;
        this.name = name;
        this.race = race;
        this.color = color;
        this.age = age;
    }

    _id: string;
    name: string;
    race: string;
    color: string;
    age: number;
}
