import React from "react"

const TabButton = ({ idx, title, openTab, setOpenTab, color = "pink" }) => {
  return (
    <li className="mr-2 last:mr-0 flex-auto text-center">
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          (openTab === idx
            ? "text-white bg-" + color + "-600"
            : "text-" + color + "-600 bg-white")
        }
        onClick={e => {
          e.preventDefault()
          setOpenTab(idx)
        }}
        data-toggle="tab"
        href={"#link" + idx}
        role="tablist"
      >
        {title}
      </a>
    </li>
  )
}

export default function TabsRender({ setOpenTab, openTab, content }) {
  return (
    <ul
      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
      role="tablist"
    >
      {content.map(({ title }, idx) => (
        <TabButton
          setOpenTab={setOpenTab}
          openTab={openTab}
          title={title}
          idx={idx}
        />
      ))}
    </ul>
  )
}
