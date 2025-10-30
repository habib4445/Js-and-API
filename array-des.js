// const habib={
//     age:25,
//     name:'habib',
//     status:'not found '
// }
// const {name,age,status}=habib;
// console.log(age);

// const person=["habib","shakib","Ebru"];
// const [hab,tab,sab]=person;
// console.log(tab,sab,hab);

// const ha={
//     age:25,
//     name:'habib',
//     status:'not found ',
// }
// console.log(Object.values(ha));

// const person1={
//     age:25,
//     name:'habib',
//     status:'not found ',
// }
// for(let key of Object.entries[person1]){
//     console.log(key);
// }
const person1={
    age:25,
    name:'habib',
    status:'not found '
}
for(let [key,value] of Object.entries(person1)){
    console.log(`key ${key} value: ${value}`);
}