// ## Counter without setInterval

var count = 0;
function counter() {
    console.clear();
    console.log(count);
    count = count + 1;      
    setTimeout(counter, 1000);
}
counter();

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































// (Hint: setTimeout)