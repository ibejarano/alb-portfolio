import React from "react"
import { Navbar, Nav } from "react-bootstrap"
// import logo from "./logo.svg"

const NavbarComponent = ({ siteTitle }) => (
  <Navbar
    className="justify-content-between"
    style={{
      position: "absolute",
      background: "transparent",
      width: "100%",
      zIndex: "2",
    }}
  >
    <Navbar.Brand
      href="#home"
      className="text-white"
      style={{ fontSize: "30px" }}
    >
      {siteTitle}
    </Navbar.Brand>
    <Nav>
      <Nav.Link className="text-white h1 mr-4" href="#home">
        Obras
      </Nav.Link>
      <Nav.Link className="text-white h1 mr-4" href="#features">
        Bio
      </Nav.Link>
      <Nav.Link className="text-white h1 mr-4" href="#pricing">
        Contacto
      </Nav.Link>
      <Nav.Link className="text-white" href="#pricing">
        <svg
          width="30"
          height="30"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-width="3"
            d="M25.3333 3.16666H12.6666C7.41992 3.16666 3.16663 7.41996 3.16663 12.6667V25.3333C3.16663 30.58 7.41992 34.8333 12.6666 34.8333H25.3333C30.58 34.8333 34.8333 30.58 34.8333 25.3333V12.6667C34.8333 7.41996 30.58 3.16666 25.3333 3.16666ZM6.33328 12.6667C6.33328 9.16886 9.16881 6.33333 12.6666 6.33333H25.3333C28.8311 6.33333 31.6666 9.16886 31.6666 12.6667V25.3333C31.6666 28.8311 28.8311 31.6667 25.3333 31.6667H12.6666C9.16881 31.6667 6.33328 28.8311 6.33328 25.3333V12.6667ZM19 26.9167C14.6277 26.9167 11.0833 23.3722 11.0833 19C11.0833 14.6277 14.6277 11.0833 19 11.0833C23.3722 11.0833 26.9166 14.6277 26.9166 19C26.9166 23.3722 23.3722 26.9167 19 26.9167ZM19 23.75C21.6233 23.75 23.75 21.6234 23.75 19C23.75 16.3766 21.6233 14.25 19 14.25C16.3766 14.25 14.25 16.3766 14.25 19C14.25 21.6234 16.3766 23.75 19 23.75ZM28.4999 11.0833C28.4999 11.9578 27.7911 12.6667 26.9166 12.6667C26.0422 12.6667 25.3333 11.9578 25.3333 11.0833C25.3333 10.2089 26.0422 9.5 26.9166 9.5C27.7911 9.5 28.4999 10.2089 28.4999 11.0833Z"
            fill="white"
          />
        </svg>
      </Nav.Link>
      <Nav.Link href="#pricing">
        <svg
          width="30"
          height="30"
          viewBox="0 0 38 38"
          className="w-7 h-7 ml-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33329 3.16666H31.6666C33.4155 3.16666 34.8333 4.58443 34.8333 6.33333V31.6667C34.8333 33.4156 33.4155 34.8333 31.6666 34.8333H6.33329C4.58439 34.8333 3.16663 33.4156 3.16663 31.6667V6.33333C3.16663 4.58443 4.58439 3.16666 6.33329 3.16666ZM6.33327 6.33333V31.6667H31.6666V6.33333H6.33327ZM17.6273 19.007H20.5833V28.5H23.75V19.007H26.8888V15.8403H23.75V14.25C23.75 13.3755 24.4588 12.6667 25.3333 12.6667H26.9166V9.5H25.3333C22.7099 9.5 20.5833 11.6266 20.5833 14.25V15.8403H17.6273V19.007Z"
            fill="white"
          />
        </svg>
      </Nav.Link>
    </Nav>
  </Navbar>
)

export default NavbarComponent
