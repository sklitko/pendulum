/**
 * Created by klitko on 02.12.16.
 */


var element = document.querySelectorAll('div');
var i = 0;
var timer;

element[0].onclick = start_stop;
var flags = true;
var flag = true;

start();

function start() {
    timer = setInterval(function () {
        if (flags) {
            go(i++);
            i > 500 ? flags = false : '';
        } else {
            go(i--);
            i < 0 ? flags = true : '';
        }
    }, 5);
}

function start_stop() {
    if (flag) {
        clearInterval(timer);
        flag = false
    } else {
        start();
        flag = true
    }

}

function go(argument) {
    element[0].style.marginLeft = argument + 'px';
}


