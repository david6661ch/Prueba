// Clasificador de temperatura 
import inquirer from 'inquirer';
let mensaje;
let {celcius} = await inquirer.prompt([
    {
        type: "number",
        name: "celcius",
        message: "Ingrese la temperatura: "
    }
])


if (celcius <10){
    mensaje = "Hace frío, lleva chaqueta.";
} else if (celcius >= 10 && celcius <=24 ){
    mensaje = "Clima templado.";
} else if (celcius >24 ){
    mensaje = "Hace calor, hidratate."
} else {
    mensaje = "ERROR!!!";
}
console.log(mensaje);