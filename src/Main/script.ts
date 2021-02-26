import { IsPlayer } from './../interface/isPlayer.js';
import { Player } from "../class/isPlayer.js";


const shakib=new Player('Shakib',25,'Bangladesh')
let arif:IsPlayer;   //interface er structure follow korbe

arif=new Player('Arif',25,'Bangladesh')
console.log(arif.play())

const players: IsPlayer[]=[]
players.push(shakib)
players.push(arif)

console.log(players)


//Generic

const addID=<T extends object>(obj:T)=>{  // Ekhaner T holo generic jodi eta use na kortam tahole sudhu id paitam ami user e.
    let id=Math.floor(Math.random()* 100);
    return {...obj, id}
}

let user=addID({
    name:"shakib",
    age:25,
    country: 'Bangladesh'
})

addID(user)


//Interface er moddhe generic

// interface ApiResponse<T> { // ki type er data asbe jana na thakle
//     status: number;
//     type:string;
//     data: T;
// }

// const response1: ApiResponse<string>={ //ekhan theke type bole deoya jabe
//     status:200,
//     type:'good',
//     data: 'test'

// }



//enum er bebohar

enum RType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN};

interface ApiResponse<T> { // ki type er data asbe jana na thakle
    status: number;
    type: RType;
    data: T;
}

const response1: ApiResponse<string>={ //ekhan theke type bole deoya jabe
    status:200,
    type:RType.SUCCESS,  //type gula mone thakbe vul hobe na r
    data: 'test'

}