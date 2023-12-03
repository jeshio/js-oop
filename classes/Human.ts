class Human extends Mammal {
    constructor(name: string, health: HealthType) {
        super(name, health, ['plant', 'meat'])
    }

    feed(target: Chordate, food: FoodPreferingsType) {
        console.log(`${this.name} покормил ${target.name}. ${target.name} съел ${food}`)
    }
}

const tolya = new Human("Толя", "bad")

tolya.feed(boogy, "bone")
