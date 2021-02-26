import { Player } from "../class/isPlayer.js";
const shakib = new Player('Shakib', 25, 'Bangladesh');
let arif; //interface er structure follow korbe
arif = new Player('Arif', 25, 'Bangladesh');
console.log(arif.play());
const players = [];
players.push(shakib);
players.push(arif);
console.log(players);
//Generic
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "shakib",
    age: 25,
    country: 'Bangladesh'
});
addID(user);
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
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
;
const response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: 'test'
};
