import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement; //injected by babel to react.
//reactElement is an object which is created by React.createElement
  
console.log(e) //it is an object returned by React.createElement

  function App() {
    return e('div', {id:'parent'},
        [
            e('div',{id:'child'},
                [e('h1',{},
                 'i am h1 tag'),e('h2',{},
                     'i am h2 tag'),] )
        ],
        e('div',{id:'child2'},
            [e('h1',{},
             'i am h1 tag'),e('h2',{},
                 'i am h2 tag'),] )
       );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));