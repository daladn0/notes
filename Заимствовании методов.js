// Если мы создаём объект, похожий на массив (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.

let obj = {
    0: 'Hello',
    1: 'world!',
    length: 2,
};

obj.join = Array.prototype.join;
obj.forEach = Array.prototype.forEach;

console.log(obj.join(', '));
console.log('------------');
obj.forEach( item => console.log(item) );
