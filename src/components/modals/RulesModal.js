import React from 'react';

export default function RulesModal(props) {
    const { visible, exit } = props
    if (!visible) return null
    return (
        <div className="backdrop">
            <div className="rules-modal">
                <div className="rules-modal-top">
                    <h2 className="rules-title">RULES</h2>
                    <button 
                        onClick={exit}
                        className="exit-button-desktop"
                    >X</button>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/image-rules.svg`} alt="rules"/>
                <button 
                    onClick={exit}
                    className="exit-button-mobile"
                >X</button>
            </div>
        </div>
    )
}
