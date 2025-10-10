// const domElement=document.createElement('h1');
// domElement.innerText="Hello from js";

// const roott=document.getElementById('root');

// roott.appendChild(domElement);



// const e = React.createElement; //injected by babel to react.
// //reactElement is an object which is returned  by React.createElement
  
// console.log(e) //it is an object returned by React.createElement



//   function App() {
//     return e('div', {id:'parent'},
//         [
//             e('div',{id:'child1'},
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


//   root.render(e(App)); //here render method takes react element(object) as input and converts it to dom element and put it in the root div(it replace the content of the root div with the content of the react element) in the index.html file.
//   //important it .render() method replaces the content not append. 


// REVISE 

const reactElement= React.createElement('div',{id:'parent'},React.createElement('h1',{id:"heading"},'Iam heading inside div parent'));

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(reactElement)
