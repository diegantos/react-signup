import "./Signup.scss";

export const Signup = () => {
  return (
    <div className="Login">
      <img src="/src/assets/logo.svg" alt="logo" />
      <h2>Sign up</h2>

      <form action="" className="Login-form">
        <div className="Username">
          <input
            type="email"
            autoComplete="on"
            className="Username-input"
            placeholder="Username"
          />
          <div className="Spinner"></div>
        </div>
        <input type="password" name="password" placeholder="Password" />

        <div className="Bars"></div>
        <div className="Strength"></div>
        <button className="Login-button">JOIN NOW</button>
      </form>
    </div>
  );
};
