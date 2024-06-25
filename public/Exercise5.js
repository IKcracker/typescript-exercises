"use strict";
class Calculator {
    constructor() {
        this.num1 = 0;
        ;
        this.num2 = 0;
    }
    /**
     * add
     */
    addition(inum1, inum2) {
        this.num1 = inum1;
        this.num2 = inum2;
        console.log(this.num1 + this.num2);
    }
    subtraction(inum1, inum2) {
        this.num1 = inum1;
        this.num2 = inum2;
        console.log(this.num2 - this.num1);
    }
    multiplication(inum1, inum2) {
        this.num1 = inum1;
        this.num2 = inum2;
        console.log(this.num2 * this.num1);
    }
    division(inum1, inum2) {
        this.num1 = inum1;
        this.num2 = inum2;
        if (this.num2 !== 0) {
            console.log(this.num1 / this.num2);
        }
        else {
            console.log('you can not divide by zero');
        }
    }
}
let cal = new Calculator();
cal.addition(1, 1);
cal.division(2, 2);
