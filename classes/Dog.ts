class Dog extends Mammal {
    constructor(name: string, health: HealthType) {
        super(name, health, ['meat', 'plant', 'bone'])
    }

    byte(target: Mammal) {
        console.log(`${this.name} укусил ${target.name}`)
    }
}

const boogy = new Dog("Собака", "bad")

boogy.byte(lion)