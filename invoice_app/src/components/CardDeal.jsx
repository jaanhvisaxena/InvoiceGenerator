import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Multi-App Invoicing  <br className="sm:block hidden" /> Made Simple!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Transform your billing process with ease! Generate invoices effortlessly through Paytm, Apple Pay, Visa, Shopify, and more. Seamlessly sync your transactions and streamline your business finances. Elevate your invoicing experience today!    </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="./images/img_1.png" alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
