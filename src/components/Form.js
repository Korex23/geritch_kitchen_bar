import { useState } from "react";
import { SpoonIcon } from "./Icons";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="subscribe-card">
        <div className="newsletter">
          <p>Newsletter</p>
          <SpoonIcon />
        </div>

        <h2>Subscribe To Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
        <form className="subscribe-form mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name=""
            id=""
            onChange={handleChange}
            placeholder="Email Address"
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};
