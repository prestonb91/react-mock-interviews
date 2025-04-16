import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");

  return (
    <div>
      <div>
        <button
          onClick={() => setActiveTab("HTML")}
          style={{
            backgroundColor: activeTab === "HTML" ? "purple" : "gray",
            color: activeTab === "HTML" ? "white" : "black",
            border: "none",
          }}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("CSS")}
          style={{
            backgroundColor: activeTab === "CSS" ? "purple" : "gray",
            color: activeTab === "CSS" ? "white" : "black",
            border: "none",
          }}
        >
          CSS
        </button>
        <button 
          onClick={() => setActiveTab("JavaScript")}
          style={{
            backgroundColor: activeTab === "JavaScript" ? "purple" : "gray",
            color: activeTab === "JavaScript" ? "white" : "black",
            border: "none",
          }}  
        >JavaScript</button>
      </div>
      <div>
        {activeTab === "HTML" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {activeTab === "CSS" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {activeTab === "JavaScript" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
