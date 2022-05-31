import React, { useState } from 'react'

export const ReadButton = () => {
    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
    <div>
        <button onClick={handleClick}>{ toggle ? "Read" : "Mark as Read" }</button>
    </div>
  )
}
