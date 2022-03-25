import React from "react";
import { useParams } from "react-router-dom";
export default function Details(props) {
  const myParams2 = useParams();
  const details = myParams2.detail;
  const id = myParams2.id;

  const { item } = props;
  console.log(item)
  let data =
    details === "capital" && item[id - 1].capital !== undefined ? (
      item[id - 1].capital[0]
    ) : details === "languages" && item[id - 1].languages !== undefined ? (
      Object.values(item[id - 1].languages)
    ) : details === "population" && item[id - 1].population !== undefined ? (
      item[id - 1].population
    ) : details === "region" && item[id - 1].region !== undefined ? (
      item[id - 1].region
    ) : details === "maps.googleMaps" &&
      item[id - 1].maps.googleMaps !== undefined ? (
      <h6>
        Link:{" "}
        <a href={item[id - 1].maps.googleMaps} target="_black">
          {item[id - 1].maps.googleMaps}
        </a>
      </h6>
    ) : (
      "not registered in the system"
    );

  return <div>{data ? data : ""}</div>;
}
