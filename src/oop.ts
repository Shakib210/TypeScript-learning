// class Player {
//     // name: string;
//     // age: number;
//     // country: string;

//     // constructor(n: string, a:number, c: string){
//     //     this.name=n;
//     //     this.age=a;
//     //     this.country=c;
//     // }

//     constructor(  //evabe shortcut e uporer sob gulankaj kora jay
//         private name: string,
//         public age:number,
//         readonly country: string
//     ){}

//     play(){
//         console.log(`${this.name} from ${this.country} playing cricket with ${this.age} years old boy`)
//     }
// }


// import {Player} from './oop2.js'

// const shakib=new Player('Shakib',25,'Bangladesh')
// const arif=new Player('Arif',25,'Bangladesh')

// const players:Player[]=[]
// players.push(shakib)
// players.push(arif) 

// console.log(shakib.play())

interface RectangleOptions {  // eta diya structure banay
    width: number;
    length: number;
}

function drawRactangle(options: RectangleOptions){
    let w=options.width;
    let l=options.length
    console.log(w,l)
}

drawRactangle({
    width: 20,
    length:20,
})