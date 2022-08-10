function isDivisible(num)
{    
    if((num%3 == 0) && (num%5 == 0))
    return console.log("Xepelin");

    if(num%3 == 0)
    return console.log("Xepe");

    if(num%5 == 0)
    return console.log("Lin");
}   

//[1,2,3,4], la función retorna [24, 12, 8, 6].
test = [1,2,3,4];
console.log("Result: " + listProduct(test));

function listProduct(numbers)
{    
    let aux;
    let result = [];

    for(let i = 0; i < numbers.length; i++)
    {
        aux = 1;

        for(let j = 0; j < numbers.length; j++)
        {
            if(i == j)
                continue;

            aux = aux * numbers[j];
        }

        result.push(aux);    
    }
    return result;
}