import React from 'react';

class ExampleClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0
        }

        console.log(`${this.props.child}  constructor called`);

       

    }

    componentDidMount(){

        console.log(`${this.props.child}  componentDidMount called`);

        // this.setState({
        //     count:1
        // })


    }

    componentDidUpdate(){
        console.log(`${this.props.child}  componentDidUpdate called`);
    }


    render(){

        console.log(`${this.props.child}  render called`);

        return(
            <>
             <div>Example Class Component</div>
             <h1>{this.state.count}</h1>
             <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
             }}>clc</button>
            </>
           

        )
    }
}

export default ExampleClass;