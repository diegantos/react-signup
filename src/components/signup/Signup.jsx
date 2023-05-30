import { useState } from "react";
import "./Signup.scss";

export const Signup = () => {

  const [ loading, setLoading ] = useState(false)
  const [ strength, setStrength ] = useState('')

  const strengthLabel = ['weak', 'medium', 'strong']

  const handleLoading = (event) => {
    const value = event.target.value
    setLoading(value !== '')
  }

  const handleStrength = (password) => {
    let upper = false,
        lower = false,
        number = false
    let strengthIndicator = -1

    console.log(password)

    password.split('').forEach((char) => {
      
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
    setStrength(strengthLabel[strengthIndicator] ?? "")
  }

  const handleChange = (event) => {
    handleLoading
    handleStrength(event.target.value)
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
            onChange={handleChange} />
            { loading && <Spinner /> }
        </div>

        <div className={`Bars ${strength}`}></div>
        <div className="Strength">{strength} password</div>
        <button type="submit">JOIN NOW</button>
      </form>
    </div>
  );
};
