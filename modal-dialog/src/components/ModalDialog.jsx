export default function ModalDialog({ children, title, onClose }) {

    return (
      <div 
        className="overlay"
        onClick={onClose}  
      >
        <div 
          className="modal"
          onClick={(e) => e.stopPropagation()} 
        >
          <h1>{title}</h1>
          {children}
          <button
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  