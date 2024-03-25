/*EXERCÍCIO 05*/

let txt = "Codando";
let txtInvert = "";
for (let i = txt.length-1; i >= 0; i--) {
	txtInvert += txt[i];
}
console.log(txtInvert);