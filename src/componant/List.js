import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
export default function List(props) {
  const { item } = props;
  const myParams = useParams();

  return (
    <div>
      {
        <figure>
          <img
            style={{ minWidth: "30%", height: "300px" }}
            src={item[myParams.id - 1].flags.png}
            alt=""
          ></img>
          <figcaption>{item[myParams.id - 1].name.common}</figcaption>
        </figure>
      }

      <ul className="detail">
        <li>
          <NavLink
          className={(navData) => navData.isActive ? "text-success" : "text-dark" }
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            to="capital"
          >
            Capital:
          </NavLink>
        </li>
        <li>
          <NavLink
          className={(navData) => navData.isActive ? "text-success" : "text-dark" }
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            to="languages"
          >
            Languages:
          </NavLink>
        </li>
        <li>
          <NavLink
          className={(navData) => navData.isActive ? "text-success" : "text-dark" }
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            to="population"
          >
            Population:
          </NavLink>
        </li>
        <li>
          <NavLink
           className={(navData) => navData.isActive ? "text-success" : "text-dark" }
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            to="region"
          >
            Region:
          </NavLink>
        </li>
        <li>
          <NavLink
          className={(navData) => navData.isActive ? "text-success" : "text-dark" }
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            to="maps.googleMaps"
          >
            Maps:
          </NavLink>
        </li>
        <li style={{ color: "red", fontSize: "18px" }}>
          <Outlet />
        </li>
      </ul>
    </div>
  );
}
