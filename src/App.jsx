import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LastNews from "./page/open";
import rasm1 from "./russ.png";
import rasm2 from "./nrg-banner.jpg";

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
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="language">
              <img
                src={rasm1}
                width={25}
                height={25}
                style={{ borderRadius: 50 }}
                alt=""
              />{" "}
              <h3>Ru</h3>
            </div>
            <div className="subscribe">
              <a
                href="https://t.me/TheTimeImSpending"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FontAwesomeIcon icon={faTelegram} /> Подписаться
                </button>
              </a>
            </div>
            <div className="bars">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="nav">
            <ul>
              <li>Узбекистана </li>
              <li> Мир </li>
              <li>Экономика </li>
              <li>Политика </li>
              <li> Общество</li>
              <li>Технологии</li>
              <li> Спорт</li>
              <li> Культура</li>
              <li>Происшествия</li>
              <li>Туризм</li>
            </ul>
          </div>
          <div className="banner">
            <img src={rasm2} alt="banner" />
          </div>
          <LastNews />
        </div>
        <div className="footer-container" style={{ marginTop: "70px" }}>
          <div className="footer-mini-about" style={{ marginTop: "20px" }}>
            <div className="footer-logo">
              <h1>MTB</h1>
            </div>
            <div className="footer-about2">
              <div className="footer-text" style={{ color: "white" }}>
                <p>
                  Подписывайтесь на наш канал в Telegram и будьте всегда в курсе
                  самых последних новостей:
                </p>
              </div>
              <div className="subscribe-btn">
                <a
                  href="https://t.me/TheTimeImSpending"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <FontAwesomeIcon icon={faTelegram} /> Подписатся
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="last-info">
            <div className="info-last1">
              <p>
                О сайте <br /> <br />
                Воспроизводство, копирование, тиражирование, <br />
                распространение и иное использование <br /> информации с сайта
                «NAMANGANLIKLAR24.UZ» <br /> возможно только с предварительного
                письменного <br /> разрешения редакции.
              </p>
            </div>
            <div className="info-last2">
              <ul>
                <li>Информация о сайте</li> <br />
                <li id="writeUsBtn">Напишите нам</li>
                <br />
                <li>Реклама </li> <br />
                <li>Прислать новость</li>
              </ul>
            </div>
            <div
              className="info-last3"
              style={{ position: "relative", bottom: "19px" }}
            >
              <ul>
                <li>Использование материалов </li> <br />
                <li>Темы дня </li> <br />
                <li>Наша команда</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
