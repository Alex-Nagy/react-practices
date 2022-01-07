import React, {useState} from 'react'

function ButtonWithHooks() {
    const [greeting, setGreeting] = useState("Hello2")
    const [title, setTitle] = useState("Main Title")
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Bye2")}>Click Me</button>
            <button onClick={() => setTitle("MTititle2")}>Click Me</button>
        </div>
    )
}

export default ButtonWithHooks
