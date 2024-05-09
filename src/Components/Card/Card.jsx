import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 bg-primary ">
        {data.map((element, index) => {
          return (
            <>
              <div key={index}>
                <div className="col p-4">
                  <div className="card box">
                    <div className="card-body border-6 p-4">
                      <p className="card-title text-muted text-center">
                        {element.title}
                      </p>
                      <h2 className="card-title text-center fw-bolder fs-1rem">
                        {element.price}
                      </h2>
                      <hr></hr>
                      <p className="card-title p-2 fw-medium ">
                        <FontAwesomeIcon icon={faCheck} /> {element.user}
                      </p>
                      <p className="card-title p-2 fw-medium ">
                        <FontAwesomeIcon icon={faCheck} /> {element.storage}
                      </p>
                      <p className="card-title p-2 fw-medium ">
                        <FontAwesomeIcon icon={faCheck} /> {element.project}
                      </p>
                      <p className="card-title p-2 fw-medium ">
                        <FontAwesomeIcon icon={faCheck} /> {element.community}
                      </p>
                      {element.IsprivateProject ? (
                        <p className="card-content p-2 fw-medium ">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} /> {element.private}
                        </p>
                      ) : (
                        <p className="card-content text-muted p-2 fw-medium  ">
                          {" "}
                          <FontAwesomeIcon icon={faTimes} /> {element.private}
                        </p>
                      )}
                      {element.Issupport ? (
                        <p className="card-content p-2 fw-medium ">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} /> {element.support}
                        </p>
                      ) : (
                        <p className="card-content text-muted p-2 fw-medium ">
                          <FontAwesomeIcon icon={faTimes} /> {element.support}
                        </p>
                      )}
                      {element.Isdomain ? (
                        <p className="card-content p-2 fw-medium ">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} /> {element.domain}
                        </p>
                      ) : (
                        <p className="card-content text-muted p-2 fw-medium ">
                          <FontAwesomeIcon icon={faTimes} /> {element.domain}
                        </p>
                      )}
                      {element.Isstatus ? (
                        <p className="card-content p-2 fw-medium ">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} /> {element.status}
                        </p>
                      ) : (
                        <p className="card-content text-muted p-2 fw-medium ">
                          <FontAwesomeIcon icon={faTimes} /> {element.status}
                        </p>
                      )}
                      <div className=" text-center ">
                        <button className="btn btn-primary fw-semibold  mt-3 rounded-5 w-100 p-3">
                          BUTTON
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
