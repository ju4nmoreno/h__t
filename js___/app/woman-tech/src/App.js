import React, { useState } from 'react'
import './App.css'

const Avatar = ({ name, id }) => {
    const [enabled, setEnabled] = useState(true)
    const className = enabled ? '' : 'enabled'
    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`

    return (
        <picture>
            <img
                className={className}
                onClick={() => setEnabled(!enabled)}
                src={src}
            />
            <strong>{name}</strong>
        </picture>
    )
}

function App() {
    return (
        <>
            <h2>Women in-Tech</h2>
            <Avatar name="Linda" id="10" />
            <Avatar name="She" id="68" />
        </>
    )
}

export default App
