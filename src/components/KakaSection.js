import React from "react";
import { Link } from "react-router-dom";
import "./KakaSection.css";
import KButton, { ButtonColor } from "./KButton";

const KakaSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>

    <div className={lightBg ? "kakaSection" : "kakaSection darkBg"}>
      <div className="kakaSection__container">
        <div
          className="row kakaSection__row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          {/* Cột 1 */}
          <div className="col">
            <div className="kakaSection__text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "kakaSection__subtitle"
                    : "kakaSection__subtitle dark"
                }
              >
                {description}
              </p>

              <Link to="sign-up">
                <KButton buttonColor={ButtonColor.Blue}>{buttonLabel}</KButton>
              </Link>
            </div>
          </div>

          {/* Cột 2 */}
          <div className="col">
            <div className="kakaSection__img-wrapper">
                <img src={img} alt={alt} className="kakaSection__img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </>
  );
};

export default KakaSection;
