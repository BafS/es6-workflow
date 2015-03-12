class Animal {

	constructor(name) {
		this.name = name
	}

	drink(substance) {
		console.log(this.name + ' drink ' + substance)
	}

	eat(...foods) {
		console.log('Miam, I eat ')
		foods.map(food => console.log('- ' + food))
	}
}

class Cat extends Animal {
	
	constructor(name) {
		super(name)
	}

	drink(substance) {
		super.drink(substance)
		console.log('It was good !')
	}
}

class Koala extends Animal {

	constructor(name) {
		super(name)
	}

	drink(substance) {
		console.log('I don\'t want to drink ' + substance + '...')
	}

	eat() {
		super.eat('babmoo')
	}
}

export {Cat, Koala}
