import React from 'react';
class ReplacementOfUseEffectInClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name : "rozan",
            age :20
        }
    }

    render(){
        return(
            <>
                <h1>hello</h1>
                {this.state.name}
            </>
        )
    }
    componentDidMount() {
        return this.setState({name: 'bbb'})
    }


}
export default ReplacementOfUseEffectInClass