import style from "./index.module.scss";
import { BigCard } from "../../components/big-card";
import { useSelector } from "react-redux";

export const MainToolbar = () => {
  const data = useSelector((state) => state.app);

  return (
    <div className={style.mainToolbar}>
      <div className={style.cardList}>
        {data.activeCards.map((el) => (
          <BigCard key={el.id} card={el} />
        ))}
      </div>
    </div>
  );
};
