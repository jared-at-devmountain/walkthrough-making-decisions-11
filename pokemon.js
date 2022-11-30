//A Pokemon battle, by Jared Collier

// in this file, we are going to be simulating a battle between two pokemon
// pikachu
//    vs
// psyduck

let pikachuAttack = 50
let psyduckAttack = 65

//before the battle begins, let's log the strength comparisons

if (pikachuAttack > psyduckAttack) {
    console.log('Pikachu is more OP than psyduck')
} else if (psyduckAttack > pikachuAttack) {
    console.log('Psyduck is more OP than pikachu')
} else {
    console.log('Pikachu and psyduck are evenly matched')
}

//psyduck wants to fight, so he attacks

let pikachuHealth = 100
let pikachuDefense = 40

console.log('Psyduck attacked!')

if (pikachuHealth <= psyduckAttack) {
    console.log('Pikachu fainted')
    pikachuHealth = 0
} else {
    //pikachuHealth = pikachuHealth - psyduckAttack
    pikachuHealth -= psyduckAttack
    //console.log('Pikachu took a hit! His HP is now ' + pikachuHealth)
    console.log(`Pikachu took a hit! His HP is now ${pikachuHealth}`)
}


//pikachu counters with his own move: thunderwave!

console.log('Pikachu counter-attacks with thunderwave!')

//however, pikachu got some dirt in his eye, so there is only a 50/50 chance of it working
//let's flip a coin
let coinflip

if (Math.random() < 0.5) {
    coinflip = false
} else {
    coinflip = true
}

if (coinflip) {
    console.log('Psyduck is now paralyzed')
} else {
    console.log('Pikachu\'s thunderwave missed!')
}

// console.log(
//     coinflip === true
//       ? "Psyduck is now paralyzed"
//       : "Pikachu's thunderwave missed!"
// );

console.log('Psyduck is angry and uses fury swipes!')

let furySwipeCount = Math.floor(Math.random() * 4) + 2
let furySwipeDamage = 10

for (let i = 0; i < furySwipeCount; i++) {
    console.log('swipe!')
    if (pikachuHealth <= furySwipeDamage) {
        console.log('Pikachu fainted')
        pikachuHealth = 0
        break;
    } else {
        pikachuHealth -= furySwipeDamage
        console.log(`Pikachu took a hit! His HP is now ${pikachuHealth}`)
    }
}

if (pikachuHealth > 0) {
    console.log('Pikachu survived the onslaught of duck claw.')
    console.log('Pikachu decided it had had enough, and fled!')
}