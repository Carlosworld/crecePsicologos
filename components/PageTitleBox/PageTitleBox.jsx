import React from "react";

export default function PageTitleBox() {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Haz tu Cita con un Psicólogo.</h2>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-phone"/>{" "}
                <a href="contact-us">Has tu cita</a>
              </li>
              {/* <li className="breadcrumb-item active"></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
