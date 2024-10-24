import {useEffect, useState} from "react"
import "../styles/Switch.css";

function Switch() {
 const [theme, setTheme] = useState('light')

 function handleChange(e) {
    setTheme(e.target.checked? 'dark': 'light')
 }

 useEffect(() => {
    console.log('use effect change color', theme)
    document.body.setAttribute('data-theme', theme);
}, [theme]);

 return(
    <div className="container-switch">
    <span>Color Theme </span>
    <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
        <span className="slider"></span>
    </label>
</div>
 )
}

export default Switch