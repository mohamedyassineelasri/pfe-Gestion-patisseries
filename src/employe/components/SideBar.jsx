import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import { navlist } from "../../Admin/data/navItem";
function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#category-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-archive"></i>
            <span>Products</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="category-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/employe/products">
                <i className="bi bi-list"></i>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/employe/add_product">
                <i className="bi bi-plus"></i>
                <span>Add Product</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#users-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-people"></i>
            <span>Commande</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="users-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-person"></i>
                <span>Users</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-person-plus"></i>
                <span>Add User</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-pencil"></i>
                <span>Edit User</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#messages-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-chat-dots"></i>
            <span>Messages</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="messages-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-envelope"></i>
                <span>New Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-reply"></i>
                <span>Reply Message</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-heading">Pages</li>
        {navlist.map((nav) => (
          <li className="nav-item" key={nav.id}>
            <a className="nav-link collapsed" href="#">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
