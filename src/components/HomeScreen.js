import React from "react";
import image from "./../assets/motor.jpeg";

const HomeScreen = ({ data }) => {
  const keysMapNames = {
    modelNumber: "Model Number",
    serialNumber: "Serial Number",
    description: "Description",
    location: "Location",
  };
  return (
    <div className="container-fluid float-sm-left cardContainer">
      {data.map((item) => {
        return (
          <>
            <p className="subject">{item.name}</p>
            <div className="row cardContainer bgColor ">
              <div className="col-3">
                <img src={image} className="img-thumbnail" />
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-12 bgColor">
                <div className="col-12 h-100">
                  <table>
                    <tr className="border-bottom">
                      <td className="col-6 text-left">
                        {keysMapNames.modelNumber}
                      </td>
                      <td className="col-6 text-left">{item.modelNumber}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="col-6 text-left">
                        {keysMapNames.serialNumber}
                      </td>
                      <td className="col-6 text-left">{item.serialNumber}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="col-6 text-left">
                        {keysMapNames.description}
                      </td>
                      <td className="col-6 text-left">{item.description}</td>
                    </tr>
                    <tr>
                      <td className="col-6 text-left">
                        {keysMapNames.location}
                      </td>
                      <td className="col-6 text-left">{item.location}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="col-3 bgColor align-middle d-none d-sm-none d-md-none d-lg-flex customCard">
                <div class="col-12 h-50 d-table row customTable">
                  <div class="card card-block align-middle d-table-cell text-dark border-dark h-100">
                    <div class="card-header">Running:</div>
                    <div class="card-body">
                      <a href="#" class="card-link">
                        Alerts
                      </a>
                      <p class="card-text">Weekly Total </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 bgColor align-middle d-none d-sm-block d-xs-block d-md-block d-xl-none d-lg-none">
                <div class="col-12 h-50 d-table row">
                  <div class="card card-block align-middle d-table-cell text-dark border-dark h-100">
                    <div class="card-header">Running:</div>
                    <div class="card-body">
                      <a href="#" class="card-link">
                        Alerts
                      </a>
                      <p class="card-text">Weekly Total </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 bgColor align-middle d-flex d-sm-none">
                <div class="col-12 h-50 d-table row">
                  <div class="card card-block align-middle d-table-cell text-dark border-dark h-100">
                    <div class="card-header">Running:</div>
                    <div class="card-body">
                      <a href="#" class="card-link">
                        Alerts
                      </a>
                      <p class="card-text">Weekly Total </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomeScreen;
