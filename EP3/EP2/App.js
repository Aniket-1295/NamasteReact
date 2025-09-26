// import React from "react";
// import ReactDOM from "react-dom/client";

// const e = React.createElement; //injected by babel to react.
//reactElement is an object which is created by React.createElement

// console.log(e) //it is an object returned by React.createElement

//   function App() {
//     return e('div', {id:'parent'},
//         [
//             e('div',{id:'child'},
//                 [e('h1',{},
//                  'i am h1 tag'),e('h2',{},
//                      'i am h2 tag'),] )
//         ],
//         e('div',{id:'child2'},
//             [e('h1',{},
//              'i am h1 tag'),e('h2',{},
//                  'i am h2 tag'),] )
//        );
//   }

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(e(App));

import React from "react";
import ReactDom from "react-dom/client";

let reactElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "i am heading 1 inside div")
);

//babel is js compiler

//behand the snene JSX(transpileled before it reches the js engine(Browser)) - parcel -Babel is doing the work of transpiling


//js engine doesnot undersatand jsx

//jsx-->converts to  React.createElement-->Object-->HTML(DOM)-->Browser

//jsx is not html inside js  it is a syntex extention of js 
//this is not a js or html it is a jsx syntex
const jsxHeading = (
  <>
    <div className="parent">
    <Title />
      <h1>I am jsxHeading inside div</h1>
    </div>
    <div>
    </div>
  </>
);

console.log(reactElement); //object => react element
console.log(jsxHeading); //object => react element 

//react functional component

const Title = () => {
  return <h1>it's a title</h1>;
};

let number=45

//function returns some peace of jsx or react Element called fuctional component
const HeadingComponent = () => {
  return (
    <>
      <div className="parent">
        
        <Title ></Title >
        {Title()}
        
        {/* we can write evaluted js expression inside the {} brases like this  */}
        <h3>{number}</h3> 

        {/* we can write react element as well */}
      {jsxHeading}
      
        <h1>I am heading1 from function inside div</h1>
      </div>
      <div>
      <h2>I am heading2 from function inside div</h2>
     </div>
    </>
  );
};

console.log(reactElement); //object
console.log(jsxHeading); // object

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
root.render(<HeadingComponent />);
