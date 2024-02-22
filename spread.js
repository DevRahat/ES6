const max=Math.max(6,23,45,67,89);
//  console.log(max);

const numbers=[3,5,2,45,5,43,90,32];

const arrayMax=Math.max(...numbers);
console.log(arrayMax);

const friends=[4,5,87,9];
const bondhu =friends;
const dosto=[...friends];

console.log(bondhu);
console.log(friends);

friends.push(100);
console.log(friends);


const numbers=[45,99];
const [first,second]=numbers;

console.log(first);

function doubleThem(a,b){
    return [a*2,b*2];
}

const [first,second]=doubleThem(6,9);

console.log(first);