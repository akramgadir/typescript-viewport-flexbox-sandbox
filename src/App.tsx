import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";
import { Burger } from "./icons";


export function App() {
  const [rows, setRows] = useState(4)
  const [columns, setColumns] = useState(4)
  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => {
    if (showSidebar) {
    setShowSidebar(false)
    // console.log(`Sidebar is showing? ${showSidebar}`)
  }
    else {
      setShowSidebar(true)
      // console.log(`Sidebar is showing?  ${showSidebar}`)
    }
  }

  useEffect(() => {
    console.log(`[${rows}, ${columns}] grid`)
  }, [rows, columns])

  return (
  <>
    <div className="App">
      {showSidebar?
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        rows={rows}
        columns={columns}
        setRows={setRows}
        setColumns={setColumns}
        /> :   (
          <Burger onClick={toggleSidebar} />
          )}
      <Grid rows={rows} columns={columns}/>
    </div>
  </>
)
  }