import React from "react"

export default function Sections() {
  return (
    <div className="min-h-screen min-w-full bg-purple-100 flex flex-col justify-center p-5">
      <div className="w-full flex flex-row">
        {/* <div className="flex flex-row flex-wrap justify-center h-full px-2 py-2 bg-white shadow-lg rounded"> */}
        {contentA.map(({ text, offset }, ind) => (
          <TabContent key={ind} offset={offset} text={text} />
        ))}
      </div>
    </div>
  )
}

const contentA = [
  {
    title: "seccion A",
    text: "Contenido seccion A ",
    offset: 10,
  },
  {
    title: "seccion B",
    text: "Contenido seccion B",
    offset: 24,
  },
  {
    title: "seccion C",
    text: "Contenido seccion C",
    offset: 60,
  },
]

const contentB = [
  {
    title: "seccion D",
    text: "Contenido seccion D ",
  },
  {
    title: "seccion E",
    text: "Contenido seccion E",
  },
  {
    title: "seccion F",
    text: "Contenido eccion F",
  },
]

const TabContent = ({ text, offset }) => {
  return (
    <div
      className={`block text-white bg-indigo-600 h-2/6 shadow-lg rounded p-16 m-4  animate-carrousel transform translate-x-${offset}`}
    >
      <p>{text}</p>
    </div>
  )
}
