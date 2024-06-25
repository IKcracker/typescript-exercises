"use strict";
class Person {
    constructor(nm, ag, sn) {
        this.name = nm;
        this.age = ag;
        this.socialSecurityNumber = sn;
    }
    nameGetter() {
        return this.name;
    }
    AgeGetter() {
        return this.age;
    }
}
//if you want to access the properties of the class, you have to access them through the getters to keep our properties private not being accessble everywhere
let zack = new Person("kutllo", 12, 3);
let Zack_name = zack.nameGetter();
let Zack_age = zack.AgeGetter();
console.log(Zack_name);
