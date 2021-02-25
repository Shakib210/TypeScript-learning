"use strict";
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " playing cricket with " + this.age + " years old boy");
    };
    return Player;
}());
var shakib = new Player('Shakib', 25, 'Bangladesh');
var arif = new Player('Arif', 25, 'Bangladesh');
var players = [];
players.push(shakib);
players.push(arif);
