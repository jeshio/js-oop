type FoodPreferingsType = 'meat' | 'plant' | 'bone'
type HealthType = 'good' | 'bad' | 'dead'

class Chordate {
    name
    health
    isFlying
    isSwimming
    foodPreferings

    constructor(name: string, health: HealthType, isFlying: boolean, isSwimming: boolean, foodPreferings: FoodPreferingsType[]) {
        this.name = name
        this.health = health
        this.isFlying = isFlying
        this.isSwimming = isSwimming
        this.foodPreferings = foodPreferings
    }

    eat(target: Chordate) {
        console.log(`${this.name} съел ${target.name}`)
    }
}

const upir = new Chordate("Упырь", "bad", true, false, ["meat"])
const monster = new Chordate("Монстр", "good", false, true, ["meat"])

monster.eat(upir)
