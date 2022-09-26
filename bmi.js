class BMI {
    // this is where data is initialised in the class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}


let x = new BMI(2, 100);
let result = x.calculateBMI();
console.log(result);

