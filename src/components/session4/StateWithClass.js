import React from 'react';

class StateWithClass extends React.Component{
    // /*direct creation of state*/
    // state = {
    //     name : "Rozan",
    //     age : 20
    // }

    constructor(props) {
        super(props);
        this.state = {
            name : "Rozan",
            age : 20
        }
        this.changeFunc = this.changeFunc.bind(this)
    }
    changeFunc = ()=>{
        this.setState({name: "Rewan"})
    }

    render(){
        return (
            <>
                <p>my name is {this.props.nickname}</p>
                <p>my age is {this.state.name}</p>
                <p>my age is {this.state.age}</p>
                <button onClick={this.changeFunc}>Change Name</button>

            </>
        );
    }

}

export default StateWithClass;