import React from 'react';
class ClassComponent extends React.Component{
    name = "rozan"
    render(){
        return(
            <>
                <p>welcome {this.name} from class component</p>
            </>
        )
    }
}
export default ClassComponent;