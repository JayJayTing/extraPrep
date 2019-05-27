

const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
}


let talkingCalendar = function(date) {
    var array = date.split("/");
    var readableDate= months[array[1]];
    if(array[2][0] == 0)
    {
        switch(array[2][1])
        {
            case '1': readableDate +=  " " + 1 + "st";
                break;
            case '2': readableDate +=  " " + 2 + "nd";
                break;
            case '3': readableDate +=  " " + 3 + "rd";
                break;
            default: readableDate += " " + array[2][1] + "th";

        }
    }
    else{
        readableDate += " " + array[2] + "th";
    }

    readableDate += " " + array[0];


    return readableDate;


};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


