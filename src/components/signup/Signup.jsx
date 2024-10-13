import { useState } from "react";
import "./Signup.scss";

export const Signup = () => {

  const [ loading, setLoading ] = useState(false)
  const [ strength, setStrength ] = useState('')
  const [ infoMessage, setInfoMessage ] = useState('')

  const strengthLabel = ['weak', 'medium', 'strong', 'great']
  const messageLabel = [
    "One uppercase, lowercase, special character and number",
    "Two more steps at least",
    "Ok, you are close",
    "Great password",
  ];

  const handleLoading = (event) => {
    const value = event.target.value
    setLoading(value !== '')
  }

  const handleStrength = (password) => {
    let upper = false,
        lower = false,
        number = false,
        symbols = false
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
      if(!symbols && char.match(/[!@#$%^&*(),-/.?":{}|<>]/)){
        symbols = true
        strengthIndicator++
      }

    })
    setStrength(strengthLabel[strengthIndicator] ?? "")
    setInfoMessage(messageLabel[strengthIndicator] ?? "")
  }

  const handleChange = (event) => {
    handleLoading(event)
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

        <div className={`Bars ${strength !== '' ? 'Active' : ''} ${strength}`}></div>
        {/* <div className="Strength">{strength && <>{strength} password</>}</div> */}
        <div className="InfoMessage">{infoMessage && <>{infoMessage}</>}</div>
        <button type="submit">JOIN NOW</button>
      </form>
    </div>
  );
};
