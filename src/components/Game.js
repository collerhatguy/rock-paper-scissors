import React from 'react';
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Choice from "./Choice";

export default function Game({setScore}) {
    return (
        <section className="choice-container">
            <Choice image={rock} name={"rock"} />
            <Choice image={scissors} name={"scissors"} />
            <Choice image={paper}  name={"paper"} />
        </section>
    )
}
