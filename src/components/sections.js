import React from "react"
import Tabs from "./tabs"

export default function Sections() {
  const [openTab, setOpenTab] = React.useState(0)
  return (
    <div className="min-h-screen min-w-full bg-purple-100 flex flex-col justify-center p-5">
      <div className="h-96 w-full max-w-full lg:max-w-6xl">
        <Tabs setOpenTab={setOpenTab} openTab={openTab} content={content} />
        <div className="h-full px-2 py-2 bg-white shadow-lg rounded">
          {content.map(({ text }, ind) => (
            <TabContent key={ind} idx={ind} openTab={openTab} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}

const content = [
  {
    title: "seccion A",
    text: "Contenido seccion A ",
  },
  {
    title: "seccion B",
    text: "Contenido seccion B",
  },
  {
    title: "seccion C",
    text: "Contenido seccion C",
  },
]

const TabContent = ({ openTab, idx, text }) => {
  return (
    <div className={openTab === idx ? "block" : "hidden"} id={"link" + idx}>
      <p>{text}</p>
    </div>
  )
}
