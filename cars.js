    // Parent class
class Vehicle{
    // this is where data is initialised in the class
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}
    // Child class - extends
class Car extends Vehicle{
    // use some informations in the parent class
    constructor(make, model, year, doors){
        // access data in the parent class
        super(make,model,year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Car(`VW`,`Golf`,2021,5);
myCar.Information();