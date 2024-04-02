import React from 'react'

function Admin() {
  return (
    <div>
      <>
  <input type="checkbox" id="menu-toggle" />
  <div className="sidebar">
    <div className="side-header">
      <div className="logo">
        <img src="img/logo.png.jpg" alt="" />
      </div>
      <h3>Admin</h3>
    </div>
    <div className="side-content">
      <div className="side-menu">
        <ul>
          <li>
            <a href="#" className="active">
              <span className="las la-home" />
              <small>Dashboard</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-user-alt" />
              <small>Profile</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-envelope" />
              <small>Mailbox</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-clipboard-list" />
              <small>Booking List</small>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="main-content">
    <header>
      <div className="header-content">
        <label htmlFor="menu-toggle">
          <span className="las la-bars" />
        </label>
        <div className="header-menu">
          <label htmlFor="">
            <span className="las la-search" />
          </label>
          <div className="notify-icon">
            <span className="las la-envelope" />
            <span className="notify">4</span>
          </div>
          <div className="notify-icon">
            <span className="las la-bell" />
            <span className="notify">3</span>
          </div>
          <div className="user">
            <div
              className="bg-img"
              style={{ backgroundImage: "url(img/1.jpeg)" }}
            />
            <span className="las la-power-off" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="page-header">
        <h1>Dashboard</h1>
        <small>Admin / Dashboard</small>
      </div>
      <div className="page-content">
        <div className="analytics">
          <div className="card">
            <div className="card-head">
              <h2>107,200</h2>
              <span className="las la-user-friends" />
            </div>
            <div className="card-progress">
              <small>New User</small>
              <div className="card-indicator">
                <div className="indicator one" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>340,230</h2>
              <span className="las la-eye" />
            </div>
            <div className="card-progress">
              <small>Movies views</small>
              <div className="card-indicator">
                <div className="indicator two" style={{ width: "80%" }} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>$653,200</h2>
              <span className="las la-shopping-cart" />
            </div>
            <div className="card-progress">
              <small>Tickets Selling growth</small>
              <div className="card-indicator">
                <div className="indicator three" style={{ width: "65%" }} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>47,500</h2>
              <span className="las la-envelope" />
            </div>
            <div className="card-progress">
              <small>E-mails received</small>
              <div className="card-indicator">
                <div className="indicator four" style={{ width: "90%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="records table-responsive">
          <div className="record-header">
            <div className="add">
              <span>Entries</span>
              <select name="" id="">
                <option value="">ID</option>
              </select>
              <button>Add record</button>
            </div>
            <div className="browse">
              <input
                type="search"
                placeholder="Search"
                className="record-search"
              />
              <select name="" id="">
                <option value="">Status</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    </div>

  )
}

export default Admin
