 const products=[
    {id:1, name:"iphone",color:"black", price:1200, brand:"applet"},
    {id:2, name:"xiaomi",color:"gold", price:100, brand:"applel"},
    {id:3, name:"samsung",color:"gold", price:1500, brand:"apples"},
    {id:4, name:"iphone",color:"gold", price:1000, brand:"apples"},
    {id:5, name:"xiaomi",color:"black", price:1100, brand:"apple"},
 ];
const newProducts=products.map(p=>{
    if(p.band==="apple"){
        p.price=p.price+100;
    }
    return p;
})
console.log(newProducts);