function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    alert(Math.floor(diffInMs/(86400000)));
}
TellDay("MM/DD/YYYY");
// The string above can be edited, the program will deduct the current date from the date given. 
// My date is 05/16/2022
// TellDay("MM/DD/YYYY");
