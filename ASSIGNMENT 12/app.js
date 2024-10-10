//                                            ASSIGNEMNT NO: 12

//                                            QUESTION NO: 01

let coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip);

//                                            QUESTION NO: 02

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);


//                                            QUESTION NO: 03

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
for (let i = 0; i < 10; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(password);
