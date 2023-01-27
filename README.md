## Set Up Day Counter

```javascript
function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    return(Math.floor(diffInMs/(86400000)));
}
alert(TellDay("MM/DD/YYYY"));

```
```javascript
function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    if (diffInMs > 0) {
        return("Days since", date + ":",(Math.floor(diffInMs/(86400000)))-1);
    } else {
        return("Days Until", date + ":",(Math.abs(Math.floor(diffInMs/(86400000)))+1))
    }
}
```
Examples
```javascript
alert(TellDay("05/16/2022"));
alert(TellDay("1/1/2024"));
```
Using Switch functions
```javascript
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
```
Shortened if code
```javascript
function TellDay(date) {
    const diffInMs=new Date(new Date().toLocaleDateString())-new Date(date);
    const convert=diffInMs/86400000
    if (diffInMs>0) return (["Days since "+date+": "+Math.floor(convert)]);
    else return (["Days until "+date+": "+Math.abs(Math.floor(convert))]);
}

alert(TellDay("1/1/2023"));
```
Birthday day countdown with name variable 
```js
const BirthdayDay = 26;
const BirthdayMonth = 1;


const Name = "Name";


const YearDate = new Date();
const BirthdayDate = (`${BirthdayMonth}/${BirthdayDay}/${YearDate.getFullYear()}`);
const DateInMs = new Date(new Date().toLocaleDateString())


function TellDay(date) {
    const diffInMs=new Date(new Date().toLocaleDateString())-new Date(date);
    var convert = Math.floor(diffInMs/86400000)
    if (diffInMs>0) return (['Days since '+Name+'\'s birthday: '+Math.floor(convert)]);
    if (diffInMs == 0) {
        return ('It is '+Name+'\'s special day!');
    }
    else return (['Days until '+Name+'\'s birthday: '+Math.abs(Math.floor(convert))]);

}

console.log(TellDay(BirthdayDate));
```
