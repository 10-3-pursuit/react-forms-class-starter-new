import React from "react";

const App = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" />
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" />
        <label htmlFor="zip">Zip code:</label>
        <input type="number" id="zip" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="pets">Pets</label>
        <select>
          <option value=""></option>
          <option value="cats">cats</option>
          <option value="dogs">dogs</option>
          <option value="none">none</option>
        </select>
        <label htmlFor="admin">Admin</label>
        <input type="checkbox" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
