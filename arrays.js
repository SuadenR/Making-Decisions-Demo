/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

var jonSnowAttack = 75
var jamieLannisterAttack = 100

if ( jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has higher attack than Jamie Lannister')
}
else if ( jamieLannisterAttack > jonSnowAttack) { 
    console.log('Jamie Lannister has higher attack than Jon Snow')
} else {
    console.log("Jamie is still better tbh")
}

var jonSnowHealth = 95
var jamieLannisterHealth = 125
var jonSnowArmour = 25
var jamieLannisterArmour = 50
var jonSnowArmourPenetration = 10
var jamieLannisterArmourPenetration = 15

if ( jonSnowHealth + jonSnowArmour <= jamieLannisterAttack + jamieLannisterArmourPenetration) {
    console.log('Jon Snow has been slain by Jamie Lannister')
} 
else if ( jonSnowAttack + jonSnowArmourPenetration >= jamieLannisterHealth + jamieLannisterArmour) {
    console.log(`Jamie Lannister has been slain by Jon Snow`)
}
else (
    jonSnowHealth = jonSnowHealth + jonSnowArmour - jamieLannisterAttack - jamieLannisterArmourPenetration) 
    console.log (`Jon Snow's current health is ${jonSnowHealth}`)

var isDead = Math.random() > .5

for (let i = 0; i <= 50 ; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log (`Jon has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log(`It is a miracle! Jon is alive after the bombardment.`)
}

