class Mammal extends Chordate {
    constructor(name: string, health: HealthType, foodPreferings: FoodPreferingsType[]) {
        super(name, health, false, false, foodPreferings)

        // console.log('Mammal', name, health, foodPreferings)
    }

    run() {
        console.log('Побежал')
    }
}

const chaply = new Mammal("Чапли", "dead", ["plant"])
const lion = new Mammal("Лев", "good", ["meat"])

lion.eat(chaply)

monster.eat(lion)