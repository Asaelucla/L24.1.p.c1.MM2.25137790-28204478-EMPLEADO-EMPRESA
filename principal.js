/**
 *  Una empresa conoce de sus empleados los siguientes datos: nombre, sexo((M)asculino
 * (F)emenino), edad.Se desea que determine e imprima:promrdio de edad de los hombres y
 * la mayor edad entre las mujeres procesadas y quien la tiene.
 *  
 * Se dispone de los siguientes datos de varios empleados:(nombre, sexo, edad)
 * (Mary, F,43), (Jose ,M, 40),(Carlos,M,30),(Pedro, M,50), (Mery,F,45) (Liz,F,50)
 * 
 * Promedio de edad de los hombres: 36,66
 * Mayor edad entre las mujeres es: 50 y la tiene Liz.
 * 
 */

import cl_Empresa from "./cl_Empresa.js";
import cl_Empleado from "./cl_Empleado.js";

let empresa = new cl_Empresa();
let empleado1 = new cl_Empleado("Mary", "F", 43);
let empleado2 = new cl_Empleado("José", "M", 40);
let empleado3 = new cl_Empleado("Carlos", "M", 30);
let empleado4 = new cl_Empleado("Pedro", "M", 50);
let empleado5 = new cl_Empleado("Mery", "F", 45);
let empleado6 = new cl_Empleado("Liz", "F", 50);

empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);
empresa.procesarEmpleado(empleado6);

let salida = document.getElementById("salida");
salida.innerHTML = `
promedio de edad de los hombres: ${empresa.promeEdadHombre()}
<br> Mayor edad entre las mujeres es: ${empresa.MayorEdadMujer()} y la tiene: ${empresa.nombreMayorMujer()}
`;