import React from 'react'

let adjectives = ["lunatic", "idiot", "fool", "strange individual"]

export default function Footer(){
    {
    return(
        <div id="Footer">
            <br/>
            <br/>
            <br/>
            <h4>Made by this {adjectives[Math.floor(Math.random() * adjectives.length)]} → <img style={{width: "2vw", height: "auto"}} src="pfp.png"/> with ♥ and 🍵</h4>
            <h4>©{new Date().getFullYear()} Evan Nishi <a id="sc" href="https://github.com/Evan-Nishi/media-bias-visualization">Source Code</a></h4>
            <br/>
        </div>
        )
    }
}