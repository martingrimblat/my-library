import React, { useState } from 'react'

export const ReadButton = () => {
    const [state, setState] = useState(false);
    
    const toggle = () => {
        setState(!state)
    }
    return (
    <div>
        <button onClick={toggle}>{ state ? "Read" : "Mark as Read" }</button>
    </div>
  )
}
