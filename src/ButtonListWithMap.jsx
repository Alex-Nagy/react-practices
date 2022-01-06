import React from 'react'
import Button from './Button'

const ButtonListWithMap = () => {
    const buttonTexts = ["Save", "Click", "Send", "Delete", "Cancel"];

    return <div>{buttonTexts.map((text, i) => <Button text={text} key={i}/>)}</div>
}

export default ButtonListWithMap
