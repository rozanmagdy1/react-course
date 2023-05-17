import Header from "../headerComponent/Header";

function Session1() {
    const name = "rozan";
    const age = 20;
    const text = <p> my age is {age}</p>
    const style = 'start';

    function greeting(name){
        return <h2>hello {name}</h2>
    }
    let d = new Date();
    d = d.toLocaleTimeString();

    function f(name) {
        if(!name){
            return <p>{d}</p>
        }else{
            return <p>hi{name}</p>
        }
    }

    return(
        <>
            <h1>hello world </h1>
            <p align={style}> {name}</p>
            {text}
            {greeting(name)}
            {f()}
            {f(name)}
            <Header />
        </>
    )

}
export default Session1;