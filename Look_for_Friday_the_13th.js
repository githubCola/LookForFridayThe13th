/**
 * This function is used to get the day of the week by year, month, and date.
 * @param {number} year year
 * @param {number} m month
 * @param {number} d date
 */

function getDay(year, m, d) {
    let y_ = String(year);
    let c = Number(y_.slice(0, 2)), y = Number(y_.slice(2, 4));
    if (m < 3) {
        if (y == 0) {
            c--;
            y = 99;
        } else {
            y--;
        }
        m += 12;
    }
    return (
        y + Math.floor(y / 4) + Math.floor(c / 4) - (2 * c)
        + Math.floor(26 * (m + 1) / 10) + d - 1
    ) % 7;
}


/**
 * This function is used to get "Friday the 13th" by year.
 * @param {number} y year
 */

function getFridayThe13th(y) {
    let result = [];
    for (let m = 1; m <= 12; m++) {
        if (getDay(y, m, 13) == 5) {
            result.push([y, m, 13]);
        }
    }
    return result;
}

function display() {
    let text = document.getElementById('year').value;
    let result;
    let num = Number(text);
    if ((isNaN(num)) || ((typeof(num)) != 'number') || (num <= 1582) || (num >= 3000)) {
        result = '输入无效';
    } else {
        let targetDateList = getFridayThe13th(num);
        if (targetDateList.length == 0) {
            result = '本年没有Friday the 13th';
        } else {
            result = `${String(num)}年的Friday the 13th有 :\n`;
            for (let d of targetDateList) {
                result += `${d[0]}年${d[1]}月${d[2]}日\n`;
            }
            result = result.slice(0, -1);
        }
    }
    document.getElementById('result').innerText = result;
}
