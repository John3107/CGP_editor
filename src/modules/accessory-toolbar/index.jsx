import style from "./index.module.scss";
import { SmallCard } from "../../components/small-card";
import { useSelector } from "react-redux";

export const AccessoryToolbar = () => {
  const data = useSelector((state) => state.app);

  return (
    <div className={style.accessoryToolbar}>
      <div className={style.cardList}>
        {data.cardData.map((el) => (
          <SmallCard key={el.id} card={el} />
        ))}
      </div>
    </div>
  );
};
