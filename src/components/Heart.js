import Heartlogo from '../assets/heart.svg';

const Heart = (props) => {
    return (
      /*The line below is just like creating a div in JS.
  JS way: document.createElement('div'). JSX below is doing the same thing
  */
      <div className="heart">
        <img className="heart-img" src={Heartlogo} alt="heart" />
        <p className="heart-message">{props.msg}</p>
      </div>// The props above are coming from the HeartsList component
    );
  };

  export default Heart;
