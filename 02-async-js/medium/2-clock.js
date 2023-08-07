// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

// ## Counter without setInterval


function showTime() {
    const d = new Date();
    var hh = d.getHours() % 12;
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var ampm = hh>12 ? 'PM': 'AM';
    console.clear();
    console.log(hh+":"+mm+":"+ss+" "+ampm);    
    setTimeout(showTime, 1000);
}
showTime();