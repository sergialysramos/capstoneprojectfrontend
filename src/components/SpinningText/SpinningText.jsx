import React from 'react'
import "./SpinningText.css"

const SpinningText = ({ text, children }) => {
    const length = text.length;
    const deg = 360 / length;
    return (
        <div className="spinning-text-wrapper">
            <div className="spinning-text">
                <p>{text.split("").map((letra, i)=>(
                    <span
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`
                        }}
                    >
                        {letra}
                    </span>
                ))} </p>
            </div>
            {children}
        </div>
    )
}

export default SpinningText