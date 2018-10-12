'use strict';
const format = (time, fmt) => {
    fmt = fmt || 'hh:mm:ss';
    let nowTime = new Date();
    if (typeof time === 'string') {
        nowTime = new Date(time);
    } else if (typeof time === 'number') {
        if (time.toString().length > 10) {
            nowTime = new Date(time);
        } else {
            nowTime = new Date(time * 1000);
        }
    } else if (time instanceof Date) {
        nowTime = time;
    } else {
        throw new Error('invalid time');
    }
    const o = {
        'M+': nowTime.getMonth() + 1,
        'd+': nowTime.getDate(),
        'h+': nowTime.getHours(),
        'm+': nowTime.getMinutes(),
        's+': nowTime.getSeconds(),
        'q+': Math.floor((nowTime.getMonth() + 3) / 3),
        S: nowTime.getMilliseconds(),
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${nowTime.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    const keys = Object.keys(o);
    keys.forEach((k) => {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
    });
    return fmt;
};

module.exports = format;


