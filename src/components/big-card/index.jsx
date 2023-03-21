import { useState } from "react";
import style from "./index.module.scss";
import { iconsSearcher } from "../../helpers/iconsSearcher";
import arrowDown from "../../assets/images/arrow-down.svg";
import arrowUp from "../../assets/images/arrow-up.svg";
import copy from "../../assets/images/copy.svg";
import trash from "../../assets/images/trash.svg";
import { useDispatch } from "react-redux";
import {
  removeCardAC,
  pickCardAC,
  addCardAC,
  replaceCardPositionAC,
  renameCardAC,
} from "../../bll/app-reducer";

export const BigCard = ({ card }) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState("");

  const deleteCardHandler = () => {
    dispatch(removeCardAC(card.id));
  };

  const pickCardHandler = () => {
    dispatch(pickCardAC(card.id));
  };

  const copyCardHandler = () => {
    dispatch(addCardAC(card));
  };

  const replaceCardPositionHandler = (action) => {
    dispatch(replaceCardPositionAC(card, action));
  };

  const renameCardHandler = () => {
    dispatch(renameCardAC(card.id, cardTitle));
    setCardTitle("");
  };

  return (
    <div
      className={style.bigCard}
      style={{ background: card.isActive && "#D9E7FF" }}
      onClick={() => pickCardHandler()}
    >
      <img src={iconsSearcher(card.icon)} alt="" />
      <span>{card.title}</span>
      {card.isActive && (
        <div className={style.textfield}>
          <input
            placeholder="Register now"
            onChange={(e) => setCardTitle(e.currentTarget.value)}
            onBlur={() => renameCardHandler()}
            value={cardTitle}
          />
        </div>
      )}
      {card.isActive && (
        <div className={style.actionButtons}>
          <div className={style.buttonPart} style={{ background: "#449CF4" }}>
            <img
              src={arrowDown}
              onClick={() => replaceCardPositionHandler("down")}
            />
            <img
              src={arrowUp}
              onClick={() => replaceCardPositionHandler("up")}
            />
          </div>
          <div className={style.buttonPart} style={{ background: "#68C2E9" }}>
            <img src={copy} onClick={() => copyCardHandler()} />
            <img src={trash} onClick={() => deleteCardHandler()} />
          </div>
        </div>
      )}
    </div>
  );
};
