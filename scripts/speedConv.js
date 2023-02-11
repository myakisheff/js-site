//1
let speedKmPerHour = 36;
let speedMPerSecond = 20;

console.log(`${speedKmPerHour} км/ч соответствует ${speedKmPerHour / 3.6} м/c`);
console.log(`${speedMPerSecond} м/с соответствует ${speedMPerSecond * 3.6} км/ч`);

//2
let a = 5;
let b = 7;
let c = 3;

let per = a + b + c;
let area;

if(a > 0 && b > 0 && c > 0 && a+b>c && a+c>b && b+c>a)
{
    let p = per / 2;
    area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(`Треугольник существует \n Периметр = ${per} \n Площадь = ${area} \n Соотношение = ${per/area}`);
}
else{
    console.log('Треугольника не существует');
}

//3
let userInput = prompt('Введите число', 0);
let result = '';

if(!isNaN(userInput))
{
    let number = parseInt(userInput);

    for(let i = 0; i <= number; i++)
    {
        result = i;
        if(i % 5 === 0 && i !== 0)
        {
            result += ' fizz buzz'
        }
        else if (i % 2 === 0)
        {
            result += ' buzz';
        }
        else{
            result += ' fizz';
        }

        console.log(result);
    }
} 
else{
    console.log('Получено не число');
}

//4
let treeLevel = 12;
let tree = '';

for(let i = 0; i < treeLevel; i++)
{
    for(let j = 0; j <= i; j++)
    {
        if(i % 2 == 0)
        {
            tree += '*';
        }
        else
        {
            tree += '#';
        } 
    }
    tree += '\n';
    /*if(i % 2 == 0)
    {
        tree += '#' * i + '\n';
    }
    else
    {
        tree += '*' * i + '\n';
    }*/
}

tree += '||';

console.log(tree);