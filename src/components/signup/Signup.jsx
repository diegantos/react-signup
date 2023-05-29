import { useState } from "react";
import "./Signup.scss";

export const Signup = () => {

  const [ loading, setLoading ] = useState(false)

  const handleLoading = (event) => {
    const value = event.target.value
    setLoading(value !== '')
  }

  const Spinner = () => {
    return (
      <div className="Spinner"></div>
    )
  }

  return (
    <div className="Login">
      <img src="/src/assets/logo.svg" alt="logo" />
      <h2>Sign up</h2>

      <form action="">
        
        <input
          type="email"
          className="Username-input"
          placeholder="Username"
        />

        <div className="Password">
          <input 
            type="password"
            name="password"
            placeholder="Password" 
            onChange={handleLoading} />
            { loading && <Spinner /> }
        </div>

        <div className="Bars"></div>
        <div className="Strength"></div>
        <button>JOIN NOW</button>
      </form>
    </div>
  );
};
