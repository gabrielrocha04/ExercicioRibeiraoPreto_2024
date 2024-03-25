/*EXERCÍCIO 02*/

let Fn = 0;
let termoAnt = 0;
let n = 13;
let result = 0;

console.log("Número informado: " + n);

for (let i = 1; i <= n+1; i++) {
	if (i == 1) {
		Fn = 0;
		console.log("F0: " + Fn);
	} else if (i == 2) {
		Fn = 1;
		console.log("F" + (i-1) + ": " + Fn);
	} else {
		Fn = Fn + termoAnt;
		if (n == Fn) {
			console.log("F" + (i-1) + ": " + Fn, "(O número faz parte da sequência)");
		} else {
			console.log("F" + (i-1) + ": " + Fn);
		}
		termoAnt = Fn - termoAnt;
	}
}