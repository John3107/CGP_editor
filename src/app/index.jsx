import style from "./index.module.scss";
import { Header } from "../modules/header";
import { AccessoryToolbar } from "../modules/accessory-toolbar";
import { MainToolbar } from "../modules/main-toolbar";
import { Registration } from "../modules/registration";

export const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.toolbar}>
        <AccessoryToolbar />
        <MainToolbar />
        <Registration />
      </div>
    </div>
  );
};
