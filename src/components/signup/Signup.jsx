import "./Signup.scss";

export const Signup = () => {
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
            placeholder="Password" />
            <div className="Spinner"></div>

        </div>

        <div className="Bars"></div>
        <div className="Strength"></div>
        <button>JOIN NOW</button>
      </form>
    </div>
  );
};
