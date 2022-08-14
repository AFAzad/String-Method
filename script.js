/* Implement the function doesItContain, which takes 2 strings as argument,
return true or false whether the first string contains second string or not(Use JS In built functions) */

function doesItContain(str,substr) {
    // write code here
    // return the output , do not use console.log here
     return str.includes(substr);

}


let repl = " I m a Student of B.tech"


let newrepl = repl.replace(" I m a Student of B.tech", "I want to be developer");
console.log(newrepl);


//trim removes whitespace

let str = "             Hello are you there ?         ";
console.log(str);

let str2 = str.trim();
console.log(str2);

let x = "happy independence day";
x.toUpperCase();
console.log(x);
