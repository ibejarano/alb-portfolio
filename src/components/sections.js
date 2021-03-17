import React from "react"
import "../styles/sections.css"

import picA from "../images/pic-1.png"
import picB from "../images/pic-2.png"
import picC from "../images/pic-3.png"
import picD from "../images/pic-4.png"
import picE from "../images/pic-5.png"

export default function Sections() {
  return (
    <div className="sections-container">
      <div className="column-1">
        <img src={picA} alt="imagen Aprev"></img>
      </div>
      <div className="column-2">
        <img src={picB} alt="imagen B"></img>
        <img src={picC} alt="imagen C"></img>
      </div>
      <div className="column-3">
        <img src={picD} alt="imagen D"></img>
        <img src={picE} alt="imagen E"></img>
      </div>
      <div className="column-4">
        <img src={picB} alt="imagen B"></img>
        <img src={picC} alt="imagen C"></img>
      </div>
    </div>
  )
}
