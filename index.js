// code your solution here
function saturdayFun(task = "roller-skate") {
    return `This Saturday, I want to ${task}!`;
}
saturdayFun()

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}
mondayWork()

function wrapAdjective(b) {
    return function (a = "*") {
        return `You are ${b}${a}${b}!`
    }
}
wrapAdjective()();