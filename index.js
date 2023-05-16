let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

lizard.__proto__ = dragon
console.log(lizard.sing())
console.log(lizard.fire)