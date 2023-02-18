//1
function convertSpeed(speed, dir){
    if(dir == 'toMS')
    {
        return `${speed} м/с соответствует ${speed * 3.6} км/ч`;
    }
    else if (dir == 'toKMH')
    {
        return `${speed} км/ч соответствует ${speed / 3.6} м/c`;
    }
}

console.log(convertSpeed(20, 'toMS'));
console.log(convertSpeed(27, 'toKMH'));

//2
function absValue(x){
    return x<0?-x:x;
}

console.log(absValue(-15));
console.log(absValue(16));

//3
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };

    var keys = Object.keys(student);
    console.log(`Список свойств: ${keys}`);
    console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//4

const randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(5, 11));

//5