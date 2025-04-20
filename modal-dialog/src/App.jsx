import { useState } from "react";
import "./index.css";
import ModalDialog from "./components/ModalDialog";

export default function App() {
  const [modalState, setModalState] = useState(false);
  const [title, setTitle] = useState("Modal Dialog");

  const onClose = () => {
    setModalState(false);
  }

  return (
    <div>
      <button onClick={() => setModalState(true)}>Show Modal</button>

      {modalState && 
        <ModalDialog title={title} onClose={onClose}>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </ModalDialog>
      }
    </div>
  );
}
