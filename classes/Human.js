"use strict";
class Human extends Mammal {
    constructor(name, health) {
        super(name, health, ['plant', 'meat']);
    }
    feed(target, food) {
        console.log(`${this.name} покормил ${target.name}. ${target.name} съел ${food}`);
    }
}
const tolya = new Human("Толя", "bad");
tolya.feed(boogy, "bone");
