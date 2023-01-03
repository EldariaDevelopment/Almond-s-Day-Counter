## Set Up Day Counter

```javascript
function TellDay(date) {
    var date1 = new Date().toLocaleDateString();
    const diffInMs = new Date(date1) - new Date(date);
    alert(Math.floor(diffInMs/(86400000)));
}
TellDay("MM/DD/YYYY");
```

```javascript
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
```
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
```javascript


```
