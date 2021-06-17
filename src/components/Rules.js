import React, {useState} from 'react';
import RulesModal from "./modals/RulesModal";

export default function Rules() {
    const [modalVisibility, setModalVisibility] = useState(false)
    return (
        <div>
            <button
                onClick={() => setModalVisibility(true)} 
                className="rules-button">
                Rules
            </button>
            <RulesModal visible={modalVisibility} exit={() => setModalVisibility(false)} />
        </div>
    )
}
