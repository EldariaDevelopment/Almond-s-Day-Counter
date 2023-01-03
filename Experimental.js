// If Functions
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
// Switch functions
function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    switch(diffInMs > 0) {
    	case true:
			return(["Days since "+date +": "+Math.floor(diffInMs/86400000)]);
      	case false:
			return(["Days until "+date+": "+Math.abs(Math.floor(diffInMs/86400000))]);
    }
}

alert(TellDay("1/1/2021"));
