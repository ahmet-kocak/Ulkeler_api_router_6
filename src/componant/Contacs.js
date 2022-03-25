import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes,NavLink } from "react-router-dom";
import List from "./List";
import Details from "./Details";

export default function Contacs() {
  const [data, setdata] = useState();
  const [isvisb, setisvisb] = useState(false);


  useEffect(() => {
    async function fetchData() {
      
    await fetch("https://restcountries.com/v3.1/all").then(res=>res.json())
      .then((item) => setdata(item));
      
    }
    fetchData();
  }, [])
  
  
  return (
    <div className="mt-2 m-auto" style={{ width: "96%" }}>
      <div className="d-grid mb-1">
        <Button onClick={() => setisvisb(!isvisb)} variant="info" size="sm">
          ÜLKELER
        </Button>
      </div>

      <div style={{ display: isvisb ? "block" : "none" }}>
        <div
          className="d-inline-flex  float-start"
          style={{ minWidth: "32%", height: "90vh", overflow: "hidden" }}
        >
          <Table
            className=""
            style={{ fontSize: "17px", minWidth: "410px" }}
            bordered
            hover
            responsive
          >
            <thead>
              <tr>
                <th>No:</th>
                <th>Ülke İsimleri</th>
              </tr>
            </thead>
            <tbody style={{ height: "100px" }}>
              {data
                ? data.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          <NavLink
                          className={(navData) => navData.isActive ? "text-danger" : "text-primary" }
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                          
                            }}
                            to={`/${i + 1}`}
                          >
                            {item.name.common}
                          </NavLink>
                        </td>
                      </tr>
                    );
                  })
                : "Loading..."}
            </tbody>
          </Table>
        </div>

        <div
          style={{ display: "flex", width: "auto" }}
          className=" float-start"
        >
          <Routes>
            <Route path="/">
              <Route path=":id" element={<List item={data} />}>
                <Route path=":detail" element={<Details item={data} />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
