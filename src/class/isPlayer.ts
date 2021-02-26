import {IsPlayer} from '../interface/isPlayer.js'

export class Player implements IsPlayer {
    // name: string;
    // age: number;
    // country: string;

    // constructor(n: string, a:number, c: string){
    //     this.name=n;
    //     this.age=a;
    //     this.country=c;
    // }

    constructor(  //evabe shortcut e uporer sob gulankaj kora jay
        public name: string,
        private age:number,
        readonly country: string
    ){}

    getAge(){
        return this.age
    }

    play(){
        console.log(`${this.name} from ${this.country} playing cricket with ${this.age} years old boy`)
        return (`${this.name} from ${this.country} playing cricket with ${this.age} years old boy`)
    }
}