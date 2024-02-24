const glass={
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
}


const keys=Object.keys(glass);
console.log(keys);

const value=Object.values(glass);
console.log(value);

const pair=Object.entries(glass);
console.log(pair);

delete glass.isClean;
console.log(glass);

const {isClean, ...shortGlass} =glass;
console.log(shortGlass);

Object.freeze(glass);

glass.source='Bangladesh';
console.log(glass);