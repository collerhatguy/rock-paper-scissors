import React from 'react'
import Choice from "./Choice";

export default function ChoiceContainer() {
    return (
        <div className="choice-container">
            <Choice name="rock"/>
            <Choice name="scissors"/>
            <Choice name="paper"/>
        </div>
    )
}
