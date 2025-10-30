const habib={
    age:25,
    name:'habib',
    status:'not found '
}
const {name,age,status}=habib;
console.log(age);

const person=["habib","shakib","Ebru"];
const [hab,tab,sab]=person;
console.log(tab,sab,hab);

const ha={
    age:25,
    name:'habib',
    status:'not found ',
}
console.log(Object.values(ha));

const h={
    age:25,
    name:'habib',
    status:'not found ',
}
for(let key in h){
    console.log(` key: ${key} value: ${h}[key]`);
}