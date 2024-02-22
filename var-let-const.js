const money =25;
money =50; //not allow 

const rich=money+30; // its Allow , means we can use the money variable but not resign its value.
console.log(rich); 


const number =[23,4,23,12,56];

number=[4,5,7,7]; //Not Possible 

number[1]=55; //Possible

number.push(10,20,30); //Possible
console.log(number);


const student={
    name: 'Moyna paki',
    class: 12
}

student={               // Resign not Possible 
    name:'kokil Konti',
    class: 10
}

student.name='Moyna konti'; //change a value of a property 

//loop

for(let i=0;i<10;i++){    

}

for(const i=0;i<10;i++){     //Not possible with const keyword

}

const sum=0;              //Not Possible
for(let i=0;i<10;i++){    

}

let sum;                    //Possible
for(let i=0;i<10;i++){    

}

let sum=0;
for(let i=0;i<10;i++){
    const num=i;        //Its Possible Because inside the loop ev
    sum=sum+num;
}

