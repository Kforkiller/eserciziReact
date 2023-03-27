import { useEffect, useRef } from "react";

export function UncontrolledLogin() {
    const usernameRef = useRef("")
    const HandleFormSumbit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };
  useEffect(() => {
    usernameRef.current.focus()
  }, []);

  return (
    <div>
      <h2>Uncontrolled form.</h2>
      <form onSubmit={HandleFormSumbit}>
        <input name="username" ref={usernameRef} />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit">Submit</button>
        <button type="reset">RESET</button>
      </form>
    </div>
  );
}
