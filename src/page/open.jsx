import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faOdnoklassniki,
  faTelegram,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import rasm3 from "./Rectangle21.png";
import rasm4 from "./Rectangle23.png";
import rasm5 from "./Rectangle24.png";

const LastNews = () => {
  useEffect(() => {
    const newsBox = document.querySelector(".news-box");
    const sideBox = document.querySelector(".news-box-info");
    let newsList = document.querySelectorAll(".news, .news2, .news3");
    const newsBtn = document.querySelector(".news-btn");
    const pagination = document.querySelector(".pagination");

    const writeUsBtn = document.getElementById("writeUsBtn");
    const contactForm = document.querySelector(".contact-form");
    const infoBox = document.querySelector(".contact-info-box");
    const lastNews = document.querySelector(".last-news");
    const lastNewsText = document.querySelector(".last-news-text");

    let clickedOnce = false;

    // WRITE US
    if (writeUsBtn && contactForm && lastNews && lastNewsText) {
      writeUsBtn.onclick = () => {
        if (!clickedOnce) {
          contactForm.style.display = "block";
          if (infoBox) infoBox.style.display = "block"; 
          contactForm.scrollIntoView({ behavior: "smooth" });

          lastNews.style.display = "none";
          lastNewsText.innerHTML = "<h3>Напишите нам</h3>";

          if (pagination) pagination.style.display = "none";
          if (newsBtn) newsBtn.style.display = "none";
          if (sideBox) sideBox.style.display = "none";

          clickedOnce = true;
        }
      };
    }

    if (!newsBox || newsList.length === 0) return;

    let current = 0;

    function openNews(index) {
      newsList = document.querySelectorAll(".news, .news2, .news3");

      newsList.forEach((n) => {
        n.style.display = "none";
        n.style.flexDirection = "";

        const extra = n.querySelector(".extra-text");
        if (extra) extra.remove();

        const img = n.querySelector("img");
        if (img) {
          img.style.width = "";
          img.style.height = "";
        }
      });

      const currentNews = newsList[index];
      currentNews.style.display = "flex";
      currentNews.style.flexDirection = "column";

      const img = currentNews.querySelector("img");
      if (img) {
        img.style.width = "100%";
        img.style.width = "600px";
        img.style.height = "auto";
        img.style.alignSelf = "center";
      }

      const infoDiv = currentNews.querySelector(
        ".news-info, .news-info2, .news-info3",
      );

      if (infoDiv) {
        const extraDiv = document.createElement("div");
        extraDiv.className = "extra-text";
        extraDiv.style.marginTop = "10px";
        extraDiv.style.fontSize = "12px";
        extraDiv.style.lineHeight = "1.5";
        extraDiv.style.padding = "10px";
        extraDiv.style.maxWidth = "95%";
        extraDiv.style.alignSelf = "center";

        extraDiv.innerHTML = `
          <p>
            19 мая состоялось видеоселекторное совещание, посвященное дополнительным мерам поддержки предпринимательства.

            По данным пресс-службы главы государства, из-за пандемии в Узбекистане число бедных и безработных увеличится, а доходы семей уменьшатся. На совещании обсуждены дополнительные меры и приоритетные задачи в этом направлении.

            Прежде всего, серьезное внимание уделено обеспечению гарантий прав предпринимателей и неприкосновенности их имущества.

            «Предупреждаю всех хокимов. Если имущество хоть одного предпринимателя будет изъято незаконно, хоким одной лишь отставкой не отделается, но и ответит перед законом», - подчеркнул Шавкат Мирзиёев.

            Компетентным ведомствам даны указания усилить ответственность за нарушение неприкосновенности собственности, обеспечить полноценное исполнение решений суда о компенсации имущества предпринимателей.

            Согласно поручению президента деловая активность в каждом районе и городе будет анализироваться на ежемесячной основе.

            Бизнес-омбудсман будет вносить правительству информацию о хокимах районов и городов, которые допускают нарушения прав и неприкосновенности собственности предпринимателей.

            Кабинетом Министров будет рассматриваться вопрос о соответствии должности хокимов городов и районов, которые не решают проблемы предпринимателей и не работают с ними в достаточной мере.
          </p>
        `;

        infoDiv.appendChild(extraDiv);
      }

      if (sideBox) sideBox.style.display = "block";
      if (newsBtn) newsBtn.style.display = "none";
      if (pagination) pagination.style.display = "flex";

      current = index;
      renderPagination();
    }

    function renderPagination() {
      if (!pagination) return;

      pagination.innerHTML = "";

      const prev = document.createElement("button");
      prev.textContent = "←";
      prev.disabled = current === 0;
      prev.onclick = () => openNews(current - 1);
      pagination.appendChild(prev);

      newsList.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        if (i === current) btn.classList.add("active");
        btn.onclick = () => openNews(i);
        pagination.appendChild(btn);
      });

      const next = document.createElement("button");
      next.textContent = "→";
      next.disabled = current === newsList.length - 1;
      next.onclick = () => openNews(current + 1);
      pagination.appendChild(next);
    }

    newsList.forEach((item, i) => {
      item.onclick = () => openNews(i);
    });

  
    const moreBtn = document.querySelector(".news-btn button");
    let expanded = false;

    if (moreBtn && newsBox) {
      moreBtn.onclick = () => {
        newsList = document.querySelectorAll(".news, .news2, .news3");

        if (!expanded) {
          // OCHISH: 3 → 9
          const originalNews = Array.from(newsList).slice(0, 3);

          for (let i = 0; i < 2; i++) {
            originalNews.forEach((item) => {
              const clone = item.cloneNode(true);
              newsBox.insertBefore(clone, newsBtn);
            });
          }

          moreBtn.textContent = "Скрыть новости";
          expanded = true;
        } else {
  
          newsList.forEach((item, index) => {
            if (index >= 3) {
              item.remove();
            }
          });

          moreBtn.textContent = "Больше новостей";
          expanded = false;
        }

    
        newsList = document.querySelectorAll(".news, .news2, .news3");

        newsList.forEach((item, i) => {
          item.onclick = () => openNews(i);
        });
      };
    }
  }, []);

  return (
    <>
      <div className="last-news-text">
        <h3>Последние новости</h3>
      </div>

      <div className="last-news">
        <div className="news-box">
          <div className="news">
            <div className="news-img">
              <img src={rasm3} alt="" />
            </div>
            <div className="news-info">
              <h3>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </h3>
              <p>
                После прорыва дамбы Сардобинского водохранилища возбуждено
                уголовное дело.
              </p>
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
              </p>
            </div>
          </div>

          <div className="news2">
            <div className="news-img2">
              <img src={rasm4} alt="" />
            </div>
            <div className="news-info2">
              <h3>Мирзиёев: карантин как часть повседневной жизни</h3>
              <p>Президент Узбекистана заявил о новых правилах.</p>
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
              </p>
            </div>
          </div>

          <div className="news3">
            <div className="news-img3">
              <img src={rasm5} alt="" />
            </div>
            <div className="news-info3">
              <h3>В Ташкенте введут электронные билеты</h3>
              <p>Планируется новая система проездных билетов.</p>
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
              </p>
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
            </h3>
          </div>

          <br />

          <div className="box-info34">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i}>
                <div className="box-info33">
                  <p style={{ position: "relative", left: "10px" }}>
                    По факту прорыва Сардобинского <br />
                    водохранилища <br />
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

                {i !== 3 && (
                  <>
                    <br />
                    <div className="line" style={{ width: "258px" }}>
                      <hr
                        style={{
                          color: "#E4E4E4",
                          position: "relative",
                          left: "10px",
                        }}
                      />
                    </div>
                    <br />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pagination" style={{ display: "none" }}></div>

      <div className="contact-section">
        <div className="contact-form" style={{ display: "none" }}>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Электронная почта" />
          <input type="number" placeholder="Номер телефона" />
          <input type="text" placeholder="Тема" />
          <textarea placeholder="Текст"></textarea>

          <div className="file-and-code">
            <button className="file-btn">Прикрепить файл 📎</button>
            <div className="captcha">
              <input type="text" placeholder="Код" />
              <span className="captcha-code">4 k 7 Z a</span>
            </div>
          </div>

          <button className="submit-btn">Отправить</button>
        </div>

        <div className="contact-info-box" style={{ display: "none" }}>
          <h3 className="info-title">NAMANGANLIKLAR24</h3>
          <div className="info-email">
            <div className="email">
              <p>Электронная почта</p>
            </div>
            <div className="into">
              {" "}
              <strong>info@namanganliklar24.uz</strong>
            </div>
          </div>

          <div className="social-icon">
            <p className="info-social">Социальные сети</p>
            <div className="social-icons">
              <button className="social-btn1">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "white" }}
                />
              </button>

              <button className="social-btn2">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
              </button>

              <button className="social-btn3">
                <FontAwesomeIcon
                  icon={faOdnoklassniki}
                  style={{ color: "white" }}
                />
              </button>
            </div>
          </div>

          <div className="channel">
            <p className="info-telegram">Телеграм канал</p>
            <button className="telegram-btn">
              <FontAwesomeIcon
                icon={faTelegram}
                style={{ color: "white", fontSize: "18px" }}
              />{" "}
              Подписаться
            </button>
          </div>

          <div className="all-app">
            <p className="info-app">Мобильное приложение</p>
            <div className="app-links">
              <button className="app-btn-google">
                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
              </button>

              <button className="app-btn-apple">
                <FontAwesomeIcon icon={faApple} /> App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastNews;
