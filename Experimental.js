function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    if (diffInMs > 0) {
        alert("Days since", date + ":",(Math.floor(diffInMs/(86400000)))-1);
    } else {
        alert("Days Until", date + ":",(Math.abs(Math.floor(diffInMs/(86400000)))+1))
    }
}
TellDay("05/16/2022");
