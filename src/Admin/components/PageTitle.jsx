import React from 'react'
import './pageTitle.css';
function PageTitle({ pag }) {
  return (
    <div className="pagetitle">
      <h1>{pag}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
  )
}

export default PageTitle