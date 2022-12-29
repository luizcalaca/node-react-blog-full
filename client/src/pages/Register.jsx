import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [err, setError] = useState(null);

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
  }
  
export default Register