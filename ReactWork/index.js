console.log("Hello Ji!");
const parent = document.getElementById("root");
console.dir(parent);
const root = ReactDOM.createRoot(parent);

// const h2=React.createElement("h2",{ style:{color:'red'}},"ABES Engineering College")
// const l1=React.createElement("li",{},"Orange");
// const l2=React.createElement("li",{},"Apple");
// const l3=React.createElement("li",{},"Mango");
// const l4=React.createElement("li",{},"WaterMelon");
// const ul=React.createElement("ul",{ style:{backgroundColor:'green'}},[l1,l2,l3,l4]);//array element
// root.render(ul); // tree pe past kr deta hai


// JSX   is way which react understand but browser not understand
// it reduce the code length but change in syntax
// webell is a transpiler 

const h2=<h2 style={{color:'blue'}}>Hello Ji!</h2>
const l1=<li>Orange</li>
const l2=<li>Apple</li>
const l3=<li>Banana</li>
const l4=<li>PineApple</li>
const l5=<li>Guava</li>
const ul=<ul style={{color:'red'}}>{l1}{l2}{l3}{l4}{l5} </ul>
// const ol=<ol style={{color:'red'}}>{l1}{l2}{l3}{l4}{l5} </ol> // we can also add order list


const container =(
    <div style={{backgroundColor:'whitesmoke'}}>
        {h2}
<div>{ul}</div>
</div>

)

root.render(container);