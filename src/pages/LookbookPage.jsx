import { useEffect, useState } from "react";


export const LookbookPage = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();
  const userData = {
    name,
    email,
    password,
  };
  console.log(userData);
};

const [seconds, setSeconds] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1)
  }, 1000);
  return() => {
    clearInterval(interval);
  }
}, []);

  return (
    <div className="container form__page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="btn">Log in</button>
      </form>

      {/* <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
      </div> */}

      <div>
        <p> Component's life seconds: {seconds}</p>
      </div>
    </div>
  );
}