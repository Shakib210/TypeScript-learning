export class Player {
    // name: string;
    // age: number;
    // country: string;
    // constructor(n: string, a:number, c: string){
    //     this.name=n;
    //     this.age=a;
    //     this.country=c;
    // }
    constructor(//evabe shortcut e uporer sob gulankaj kora jay
    name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} playing cricket with ${this.age} years old boy`);
        return (`${this.name} from ${this.country} playing cricket with ${this.age} years old boy`);
    }
}
