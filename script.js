const vc=0.228 
const d=1.9
const l=9.33 
const vs=0.024
function fun(){


const qclass=document.querySelector(".input");
var q=qclass.value;
var q=q/86.4
console.log("q")
console.log(q)

var b=q/vc
console.log("b")
console.log(b)
const bc=document.querySelector(".bc")
bc.textContent=`Breadth of the grit chamber:${b}`


const dc=document.querySelector(".dc")
dc.textContent=`Depth of the grit chamber:1.9 m`

const lc=document.querySelector(".lc")
lc.textContent=`length of the grit chamber:9.33 m`

//for v-notch

var k=(q*15)/1.463923738
//k=tan(theta/2)

var value = k;
var arctan = Math.atan(value);

console.log(arctan); // Output: 0.4636476090008061

// Convert the result from radians to degrees
var theta = arctan * (180 / Math.PI);
const tc=document.querySelector(".tc")
tc.textContent=`For v-notch theta:${ theta }`

var vnb=1.467*b*vc*2
const vb=document.querySelector(".vb")
vb.textContent=`For v-notch b:${ vnb }`


}


