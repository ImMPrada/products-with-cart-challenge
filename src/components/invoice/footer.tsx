import './styles.scss';
import IconCarbonNeutral from '../../assets/icon-carbon-neutral.svg?react';

const Footer = () => {
  return (
    <>
      <div className="invoice__notice">
        <IconCarbonNeutral />
        <p>This is a <span className="text--bold">carbon-neutral</span> delivery</p>
      </div>

      <button
        className="invoice__button text--bold"
        onClick={() => {
          alert('TODO:Confirm Order');
        }}
      >
        Confirm Order
      </button>
    </>
  );
};

export default Footer;
