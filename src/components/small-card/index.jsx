import style from "./index.module.scss";
import { iconsSearcher } from "../../helpers/iconsSearcher";
import { useDispatch } from "react-redux";
import { addCardAC } from "../../bll/app-reducer";

export const SmallCard = ({ card }) => {
  const dispatch = useDispatch();

  const selectedCardHandler = () => {
    dispatch(addCardAC(card));
  };

  return (
    <div className={style.smallCard} onClick={() => selectedCardHandler()}>
      <img src={iconsSearcher(card.icon)} alt="" />
      <span>{card.title}</span>
    </div>
  );
};
