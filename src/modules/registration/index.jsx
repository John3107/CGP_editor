import style from "./index.module.scss";
import logo from "../../assets/images/logo.svg";

export const Registration = () => {
  return (
    <div className={style.registration}>
      <img src={logo} />
      <span className={style.title}>
        A legendary cap set that feels like new
      </span>
      <div className={style.description}>
        Prompt your customer to revisit your store by showing them the products
        they left <br />
        behind. Consider offering them a coupon code to close the deal. <br />
        Using the "Insert" panel on the right, drag and drop <br />
        the Abandoned Cart element onto the page below. <br />
      </div>
      <button>Register now</button>
    </div>
  );
};
