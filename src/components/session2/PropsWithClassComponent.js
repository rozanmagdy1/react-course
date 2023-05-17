import React from 'react'
class PropsWithClassComponent extends React.Component{
    render() {
        return(
            <p>the props passes in class component is {this.props.name}</p>
        )
    }
}
export default PropsWithClassComponent;