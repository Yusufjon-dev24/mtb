import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import rasm1 from "./russ.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="header-container">
          <div className="logo">
            <h1>MTB</h1>
          </div>
          <div className="case">
            <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className="language"><img src={rasm1} width={25} height={25} style={{borderRadius:50}} alt=""/> <h3>Ru</h3></div>
            <div className="subscribe">
              <button>
                <FontAwesomeIcon icon={faTelegram} /> Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
