import React from 'react';
import rulesImage from "../../images/image-rules.svg";

export default function RulesModal({visible, exit}) {
    return (
        <div
            style={{display: visible ? "flex" : "none"}} 
            className="backdrop">
            <div className="rules-modal">
                <div className="rules-modal-top">
                    <h2 className="rules-title">RULES</h2>
                    <button 
                        onClick={() => exit()}
                        className="exit-button-desktop">X</button>
                    
                </div>
                <img src={rulesImage} />
                <button 
                    onClick={() => exit()}
                    className="exit-button-mobile"
                >X</button>
            </div>
        </div>
    )
}
