var x = window.document.getElementById("time")
var content = x.innerHTML

    
function funday(takeDay){
    switch(takeDay) {
        case 0:
            var day = "sunday"
            break
        case 1:
            var day = "monday"
            break
        case 2:
            var day = "tuesday"
            break
        case 3:
            var day = "wednesday"
            break
        case 4:
            var day = "thursday"
            break
        case 5:
            var day = "friday"
            break
        case 6:
            var day = "saturday"
            break
        default:
            break
    }
    return day
}
function funmonth(takeMonth){
 month = takeMonth + 1
 return month
}
function getDa(){
    now = new Date
    var varDay = funday(now.getDay())
    var varMonth = funmonth(now.getMonth())
    var varDate = now.getDate()
    var varYear = now.getFullYear()
    var varHour = now.getHours()
    var varMinu = now.getMinutes()
    var varSec = now.getSeconds()
    x.innerHTML = "Today is " + varDay + ", " + varMonth + "/" + varDate + "/" + varYear + "<br>" + varHour + ":" + varMinu + ":" + varSec
    setTimeout("getDa()",1000)
}



   



/*


creator: https://www.github.com/rodrigonuness/
project: https://www.github.com/rodrigonuness/get_date
*/
