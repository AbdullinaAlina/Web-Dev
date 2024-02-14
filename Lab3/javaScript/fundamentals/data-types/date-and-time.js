// Create a date
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// Show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

// European weekday
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }
    return day;
}

// Which day of month was many days ago?
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

// Last day of month?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// How many seconds have passed today?
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert(getSecondsToday());

// How many seconds till tomorrow?
function getSecondsToTomorrow() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

// Format the relative date
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds

    if (diff < 1000) { // less than 1 second
        return 'right now';
    }
    let sec = Math.floor(diff / 1000); // convert diff to seconds

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
        return min + ' min. ago';
    }

    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component

    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}