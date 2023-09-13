/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let jonSnowAttack = 75
let jamieLannisterAttack = 100

if ( jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has higher attack than Jamie Lannister')
}
else if ( jamieLannisterAttack > jonSnowAttack) { 
    console.log('Jamie Lannister has higher attack than Jon Snow')
} else {
    console.log("Jamie is still better tbh")
}

let jonSnowHealth = 100
let jamieLannisterHealth = 125
let jonSnowArmour = 25
let jamieLannisterArmour = 50
let jonSnowArmourPenetration = 10
let jamieLannisterArmourPenetration = 15

if ( jonSnowHealth + jonSnowArmour <= jamieLannisterAttack + jamieLannisterArmourPenetration) {
    console.log('Jon Snow has been slain by Jamie Lannister')
} 
else if ( jonSnowAttack + jonSnowArmourPenetration >= jamieLannisterHealth + jamieLannisterArmour) {
    console.log(`Jamie Lannister has been slain by Jon Snow`)
}
else {
    jonSnowHealth = jonSnowHealth + jonSnowArmour - jamieLannisterAttack - jamieLannisterArmourPenetration
    console.log (`Jon Snow's current health is ${jonSnowHealth}`)
}
