function HelloWorld()
{ 
    const x = 5 > 3 ? true : false
    return(
        <h1>Hello World</h1>
    )
}

export default HelloWorld

{/*this HelloWorld component must be imported to the App.jsx or App component in order to be displayed
    
    It will be returned as an element in the App component e.g. <HelloWorld></HelloWorld>*/}