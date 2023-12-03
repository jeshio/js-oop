class Rabbit extends Mammal {
    constructor(name: string, health: HealthType) {
        super(name, health, ['plant'])
    }

    jump() {
        console.log(`${this.name} подпрыгнул высоко-высоко`)
    }
}

const bucksbunny = new Rabbit("Бакс Бани", "good")

bucksbunny.jump()