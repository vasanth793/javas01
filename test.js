let a=11;

if (a<=10){
    console.log('positive')
}
else if(a>15){
    console.log('negative')
}
else if (a==11){
    console.log('zero')
}
else{
    console.log('not a number')
}

//divisible by 4
//divisible by 100 /
//divisible by 400

let year=1800;

if(year%4==0){
    if(year % 100==0){
        if(year%400==0){
            console.log('leap year')        }
        else{
            console.log('not a leap year')
        }    
    }
    else {
        console.log('leap year')
    }
}
else{
    console.log('not a leap year')
}


// odd number/even number
let odd=111;


if(odd%2==0){
    console.log('even number')
}
else{
    console.log("odd number")
}