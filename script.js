/*Using prompt, variables and conditionals, ask questions to the users and display 
the result on the console.

Ask: "Tomatoes are fruits, not vegetables: true or false". 
If that answer is "true" you show "correct", otherwise show "incorrect".
Ask: "You should drink 8 glasses of water: true or false". 
If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "Fishes have only three seconds of memory: true or false". 
If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "The Great Wall of China is the only man made structure visible from space The Great Wall of China: 
true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
*/
let tomatoes = prompt("Tomatoes are fruits, not vegetables: true or false?")

if (tomatoes == "true"){
    console.log("Correct");
    }else if (tomatoes == "false") {
    console.log("Incorrect");
        }   else {
    console.log("Respuesta no valida")
            }        

let water = prompt("You should drink 8 glasses of water: true or false")

if (water == "true"){
    console.log("Incorrect");
    }else if (water == "false") {
    console.log("Correct");
        }   else {
    console.log("Respuesta no valida")
            }     

let fishes = prompt("Fishes have only three seconds of memory: true or false");

if (fishes == "true"){
    console.log("Incorrect");
    }else if (fishes == "false") {
    console.log("Correct");
        }   else {
    console.log("Respuesta no valida")
            }     

let chinaWall = prompt("The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false");

if (chinaWall == "true"){
    console.log("Correct");
    }else if (chinaWall == "false") {
    console.log("Incorrect");
        }   else {
    console.log("Respuesta no valida")
            }    