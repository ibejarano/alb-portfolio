import React from "react"
import "../styles/sections.css"

export default function Sections() {
  return (
    <div className="sections-container">
      <div className="column-1">
        <img src={`pic-1.png`} alt="imagen A"></img>
      </div>
      <div className="column-2">
        <img src={`pic-2.png`} alt="imagen B"></img>
        <img src={`pic-3.png`} alt="imagen C"></img>
      </div>
      <div className="column-3">
        <img src={`pic-4.png`} alt="imagen D"></img>
        <img src={`pic-5.png`} alt="imagen E"></img>
      </div>
      <div className="column-4">
        <img src={`pic-2.png`} alt="imagen B"></img>
        <img src={`pic-3.png`} alt="imagen C"></img>
      </div>
    </div>
  )
}
