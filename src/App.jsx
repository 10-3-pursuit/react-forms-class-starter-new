const App = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="firstName">
          First name:
          <input type="text" id="firstName" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input type="text" id="lastName" name="lastName" />
        </label>
        <label htmlFor="zip">
          Zip code:
          <input type="text" id="zip" name="zip" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" />
        </label>
        <label htmlFor="pets">
          Pets
          <select id="pets" name="pets">
            <option value=""></option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </label>
        <label htmlFor="dev">
          Developer
          <input type="checkbox" id="dev" name="dev" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
