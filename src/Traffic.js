import React, { useState } from 'react';

const Traffic = () => {
    
    const [selectedColor, setSelectedColor] = useState("red");

    return(
        <div className="traffic-light">    
            <div 
                onClick={() => setSelectedColor("green")} 
                className={
                    "light green" + (selectedColor === "green" ? " on" : "")
                }></div>
            
            <div 
                onClick={() => setSelectedColor("yellow")}
                className={
                    "light yellow" + (selectedColor === "yellow" ? " on" : "")
                }></div>
            
            <div 
                onClick={() => setSelectedColor("red")}
                className={
                    "light red" + (selectedColor === "red" ? " on" : "")
                }></div>
        
        </div>);
}

export default Traffic;