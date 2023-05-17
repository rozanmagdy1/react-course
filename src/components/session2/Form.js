import React from 'react';
import Input from "./Input";
import Button from "./Button";

function Form() {
    let print = ()=> {
        console.log("hello")
    }
    return (
        <>
            <form>
                <Input label = "name" type = "text" /><br/>
                <Input label = "password" type = "password" /><br/>
                <Button type = "button" title = "Click" func = {print} />
            </form>
        </>
    );
}

export default Form;