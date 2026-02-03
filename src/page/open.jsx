import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import rasm3 from "./Rectangle21.png";
import rasm4 from "./Rectangle23.png";
import rasm5 from "./Rectangle24.png";

const LastNews = () => {
  return (
    <div className="last-news-text">
      <h3>Последние новости</h3>
    </div> ,

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
              </p>
              <br />
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
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
              <h3>
                Мирзиёев: «Нам следовало бы принять некоторые правила <br />
                карантина как часть повседневной жизни»
              </h3>
              <br />
              <p>
                Президент Узбекистана заявил, что после того, как угроза <br />
                коронавируса исчезнет, в стране следовало бы принять
                некоторые <br /> правила периода карантина как часть своей
                повседневной жизни.
              </p>
              <br />
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
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
                В Ташкенте планируют ввести новую систему электронных <br />
                проездных билетов
              </h3>
              <br />
              <p>
                Целью этих изменений является максимально возможное <br />
                сокращение количества других маршрутов на улицах, где
                проходят <br /> основные маршруты.
              </p>
              <br />
              <p style={{ color: "#7688A4" }}>
                <FontAwesomeIcon icon={faCalendar} /> 11:31 / 15.05.2020
              </p>
            </div>
          </div>
        </div>

        <div className="news-btn">
          <button>Больше новостей</button>
        </div>
      </div>

      {/* right side */}
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
                <p style={{ color: "#7688A4", position: "relative", left: "10px" }}>
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
  );
};

export default LastNews;
