import React, { useState } from "react";
import Close from "../assets/close.svg";

function PortfolioItem({ img, title, details }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={() => toggleModal()}>
        <h3 className="portfolio__title">{title}</h3>
        <a href="#">
          <spna className="item__icon">{details[details.length - 1].icon}</spna>
          <span className="item__details">
            {details[details.length - 1].desc}
          </span>
        </a>
      </div>

      {modalIsOpen && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              onClick={() => toggleModal()}
              className="modal__close"
            />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li key={index} className="modal__item">
                    <spna className="item__icon">{icon}</spna>
                    <div>
                      <span className="item__title">{title}</span>
                      {index === details.length - 1 ? (
                        <a href="#">
                          <span className="item__details">{desc}</span>
                        </a>
                      ) : (
                        <span className="item__details">{desc}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
