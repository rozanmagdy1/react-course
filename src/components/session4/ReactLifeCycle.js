import React from 'react';
class ReactLifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "rozan",
            age : 20
        }
    }

    // static getDerivedStatesFromProps(props){
    //     this.setState({name: props.n})
    // }

    render() {
        return(
            <>
                <p> the name is {this.state.name}</p>
                <p> my fav color is {this.props.color}</p>
                <p id= "prev"></p>
                <p id= "afterUpdate"></p>
            </>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({name: "yellow"})
        }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("prev").innerHTML =
            "Before the update, the name was " + prevState.name;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("afterUpdate").innerHTML =
            "The updated name is " + this.state.name;
    }
    componentWillUnmount() {
        console.log("unmount");
    }
}

export default ReactLifeCycle;