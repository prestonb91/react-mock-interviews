import {useState} from "react";

export default function Accordion() {

  const [htmlActive, setHtmlActive] = useState(false);
  const [cssActive, setCssActive] = useState(false);
  const [jsActive, setJsActive] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={()=>setHtmlActive(!htmlActive)}
        >
          <div>
            HTML{' '}
            <span
              aria-hidden={true}
              className={`accordion-icon ${htmlActive ? "accordion-icon--rotated" : ""}`} 
            />
          </div>
        </button>
        {htmlActive &&
        <div>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </div>
        }
      </div>
      <div>
        <button
          onClick={()=>setCssActive(!cssActive)}
        >
        <div>
          CSS{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${cssActive ? "accordion-icon--rotated" : ""}`} 
          />
        </div>
        </button>
        {cssActive && <div>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </div>
        }
      </div>
      <div>
        <button
          onClick={()=>setJsActive(!jsActive)}
        >
        <div>
          JavaScript{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${jsActive ? "accordion-icon--rotated" : ""}`} 
          />
        </div>
        </button>
        {jsActive &&
        <div>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </div>
        }
      </div>
    </div>
  );
}
