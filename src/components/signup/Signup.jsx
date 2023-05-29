import { useState } from "react";
import "./Signup.scss";

export const Signup = () => {

  const [ loading, setLoading ] = useState(false)
  const [ strength, setStrength ] = useState('')

  const handleLoading = (event) => {
    const value = event.target.value
    setLoading(value !== '')
  }

  const handleStrength = (event) => {
    let upper = false,
        lower = false,
        number = false
    let strengthIndicator = -1

    event.forEach((char) => {
      
      if (!upper && char.match(/[A-Z]/)){
        upper = true
        strengthIndicator++
      }
      if (!lower && char.match(/[a-z]/)){
        lower = true
        strengthIndicator++
      }
      if (!number && char.match(/[0-9]/)){
        number = true
        strengthIndicator++
      }

    })
    setStrength(event.target.value)
    console.log(strength)
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

        <div className={`Bars ${strength}`}></div>
        <div className="Strength">strong password</div>
        <button>JOIN NOW</button>
      </form>
    </div>
  );
};
