import "./App.css";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import Header from "../src/Fonts/Components/header/header";
import UnderHeader from "../src/Fonts/Components/underHeader/underheader";

function App() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div className="content">
      <Header ref={myRef} className={myElementIsVisible ? "" : "invisible"} />
      <UnderHeader className={myElementIsVisible ? "under_header" : "sticky"} />
      <div className="main_content">
        <div className={myElementIsVisible ? "column_1" : "column_1_scroll"}>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
          <div className="div_block"></div>
        </div>
        <div className={myElementIsVisible ? "column_2" : "column_1_scroll"}>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
          <div className="div_block2"></div>
        </div>
        <div className={myElementIsVisible ? "column_3" : "column_1_scroll"}>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
          <div className="div_block3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
