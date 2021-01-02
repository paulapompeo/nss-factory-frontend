import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="menu-bar-container">
        <div className="logo">
          <h3>WATCH/LAB</h3>
        </div>
        <div className="menu-list">
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">Brand</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Magazine</a></li>
            <li><a href="/">Press</a></li>
            <li><a href="/">Contacts</a></li>
          </ul>
        </div>
        <div className="search">
          <input></input>
          <button className="search-btn">O</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
