const App = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" name="lastName" />
        <label htmlFor="zip">Zip code:</label>
        <input type="text" id="zip" name="zip" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="pets">Pets</label>
        <select id="pets" name="pets">
          <option value=""></option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <label htmlFor="admin">Admin</label>
        <input type="checkbox" id="admin" name="admin" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
