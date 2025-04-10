import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
//TRIGGERS TYPE COERCION
console.log(Number(hc)); // Calls hc.valueOf() and returns override value
console.log(String(hc)); // Calls hc.toString() which returns the overide


