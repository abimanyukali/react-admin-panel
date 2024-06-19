import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Abimanyu Admin Panel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1773450/pexels-photo-1773450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>abimanyu</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
