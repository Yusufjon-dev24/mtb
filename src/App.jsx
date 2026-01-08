import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import rasm1 from "./russ.png";
import rasm2 from "./nrg-banner.jpg";
import rasm3 from "./Rectangle21.png";
import rasm4 from "./Rectangle23.png";
import rasm5 from "./Rectangle24.png";

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
              <button>
                <FontAwesomeIcon icon={faTelegram} /> Подписаться
              </button>
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

          <div className="last-news-text">
            <h3>Последние новости</h3>
          </div>

          <div className="last-news">
            <div className="news-box">
              <div className="news-case">
                <div className="news">
                  <div className="news-img">
                    <img src={rasm3} alt="" />
                  </div>
                  <div className="news-info">
                    <h3>
                      По факту прорыва Сардобинского водохранилища <br />
                      возбуждено уголовное дело
                    </h3>
                    <br />
                    <p>
                      После прорыва дамбы Сардобинского водохранилища возбуждено
                      <br /> уголовное дело, сообщили в пресс-службе
                      Генпрокуратуры <br /> Узбекистана.
                    </p>{" "}
                    <br />
                    <p style={{ color: "#7688A4" }}>
                      <FontAwesomeIcon icon={faCalendar} />
                      11:31 / 15.05.2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-case2">
                <div className="news2">
                  <div className="news-img2">
                    <img src={rasm4} alt="" />
                  </div>
                  <div className="news-info2">
                    {" "}
                    <h3>
                      Мирзиёев: «Нам следовало бы принять некоторые правила{" "}
                      <br />
                      карантина как часть повседневной жизни»
                    </h3>
                    <br />
                    <p>
                      Президент Узбекистана заявил, что после того, как угроза{" "}
                      <br />
                      коронавируса исчезнет, в стране следовало бы принять
                      некоторые <br /> правила периода карантина как часть своей
                      повседневной жизни.
                    </p>{" "}
                    <br />
                    <p style={{ color: "#7688A4" }}>
                      <FontAwesomeIcon icon={faCalendar} />
                      11:31 / 15.05.2020
                    </p>
                  </div>
                </div>
              </div>

              <div className="new-case3">
                <div className="news3">
                  <div className="news-img3">
                    <img src={rasm5} alt="" />
                  </div>
                  <div className="news-info3">
                    <h3>
                      В Ташкенте планируют ввести новую систему электронных{" "}
                      <br />
                      проездных билетов
                    </h3>
                    <br />
                    <p>
                      Целью этих изменений является максимально возможное <br />
                      сокращение количества других маршрутов на улицах, где
                      проходят <br /> основные маршруты.
                    </p>{" "}
                    <br />
                    <p style={{ color: "#7688A4" }}>
                      <FontAwesomeIcon icon={faCalendar} />
                      11:31 / 15.05.2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-btn">
                <button>Больше новостей</button>
              </div>
            </div>
            <div className="news-box-info">
              <div className="box-info33">
                <h3 style={{ position: "relative", left: "10px", top: "5px" }}>
                  Cамые популярные новости
                </h3>{" "}
              </div>{" "}
              <br />
              <div className="box-info34">
                <div className="box-info33">
                  <p style={{ position: "relative", left: "10px" }}>
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                  </p>
                  <br />
                  <p
                    style={{
                      color: "#7688A4",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    11:31 / 15.05.2020
                  </p>
                </div>
                <div className="line" style={{ width: "258px" }}>
                  <hr
                    style={{
                      color: "#E4E4E4",
                      position: "relative",
                      left: "10px",
                    }}
                  />
                </div>{" "}
                <br />
                <div className="box-info33">
                  <p style={{ position: "relative", left: "10px" }}>
                    По факту прорыва Сардобинского <br /> водохранилища <br />
                    возбуждено уголовное дело
                  </p>{" "}
                  <br />
                  <p
                    style={{
                      color: "#7688A4",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    11:31 / 15.05.2020
                  </p>
                </div>{" "}
                <br />
                <div className="line" style={{ width: "258px" }}>
                  <hr
                    style={{
                      color: "#E4E4E4",
                      position: "relative",
                      left: "10px",
                    }}
                  />
                </div>{" "}
                <br />
                <div className="box-info33">
                  <p style={{ position: "relative", left: "10px" }}>
                    По факту прорыва Сардобинского <br /> водохранилища <br />
                    возбуждено уголовное дело
                  </p>{" "}
                  <br />
                  <p
                    style={{
                      color: "#7688A4",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    11:31 / 15.05.2020
                  </p>
                </div>{" "}
                <br />
                <div className="line" style={{ width: "258px" }}>
                  <hr
                    style={{
                      color: "#E4E4E4",
                      position: "relative",
                      left: "10px",
                    }}
                  />
                </div>{" "}
                <br />
                <div className="box-info33">
                  <p style={{ position: "relative", left: "10px" }}>
                    По факту прорыва Сардобинского <br /> водохранилища <br />
                    возбуждено уголовное дело
                  </p>{" "}
                  <br />
                  <p
                    style={{
                      color: "#7688A4",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    11:31 / 15.05.2020
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faTelegram} /> Подписатся
                </button>
              </div>
            </div>
          </div>
          <div className="line2"></div>
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
                <li>Напишите нам </li> <br />
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
