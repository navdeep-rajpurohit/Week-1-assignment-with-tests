// ## Create a counter in JavaScript
var ctr =0;
function counter() {
for(var i=0;i<10;i++) {
    ctr++;
}
console.log(ctr);
}

setInterval(counter, 1000);
console.log("Hii there2")
console.log("Hii there3")

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second