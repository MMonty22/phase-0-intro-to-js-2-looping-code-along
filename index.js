// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, string) {
    const writtenCards = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${string} gift!`)
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`)
    }
    return writtenCards;
}

function countDown() {
   let a = 10
   while (a <= 10 && a >= 0) {
       console.log(a--)
   }
   return a
}