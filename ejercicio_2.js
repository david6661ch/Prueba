//parking lot
import inquirer from 'inquirer';
let price 
let entra = await inquirer.prompt([{
    type: "rawlist",
    name: "ifCoder",
    message: "Eres coder de Riwi?",
    choices:[
        {name: "Si", value:true},
        {name: "no", value:false},
    ],
},
{
    type: "number",
    name: "time",
    message: "Cuántas horas usaste el parqueadero?"
}
])
price = 3000+(entra.time-1)*2000;
if(entra.ifCoder){
    price = price*0.85;
} 
console.log("El total a pagar es: " +price);