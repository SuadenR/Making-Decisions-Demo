let backpack = [
    'pokeball', 'pokeball', 'potion',
    'beef jerky', 'running shoes', 'moneybag'
]
let pokemon = []
let moneybag = 100
let pokeball = 2
//buying snacks

let oreosCost = 5
let oreosBought = 2
moneybag -= oreosCost * oreosBought; {
    console.log(`You know have ${moneybag} coins left in your moneybag`)
}

backpack.push ('oreos')
backpack.push ('oreos')

console.log ('After buying 2 oreos, this is our backpack')
console.log (backpack)

//professor oak gives you a pokedex & offers you bulbasaur to keep you safe

backpack.push ('pokedex')
pokemon.push ('bulbasaur')
let pokedex = []
pokedex.push ('bulbasaur')

console.log(pokedex)
console.log(pokemon)

//splice oreos, beef jerky, running shoes

backpack.splice(1);

for (let i = 0; i < 1; i++) {
    pokemon.push('pidgey')
}

console.log('Congratulations! You successfully caught the pidgey!')
console.log('After catching the pidgey, our pokemon are...')
console.log(pokemon)
console.log('After using the pokeball, this is your backpack...')
console.log(backpack)

//a wild charizard crosses your path... you attempt to catch it



