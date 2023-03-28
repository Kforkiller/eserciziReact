import React, { useState } from "react";

export function Login({ onlogin }) {
  let [data, setData] = useState({
    username: "",
    password: "",
    remember: "",
  });

  function ChangingEvent(event) {
    const { name, value, type, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function buttonCheck() {
    return !(data.username && data.password);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={ChangingEvent}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={ChangingEvent}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={ChangingEvent}
      />
      <button
        disabled={buttonCheck()}
        onClick={(event) => {
          event.preventDefault();
          onlogin(data);
        }}>
        Login
      </button>
    </div>
  );
}
