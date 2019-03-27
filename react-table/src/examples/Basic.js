import React, { useState } from "react";
import makeData from "../makeData";

import { Input } from "../components/Styles";
import Table from "../components/Table";

export default function({ infinite }) {
  const [data] = useState(() => makeData(1000));
  const [columns] = useState([
    { Header: "Row Index", accessor: (row, index) => index, width: 100 },
    {
      Header: "All",
      columns: [
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName",
              minWidth: 140,
              maxWidth: 200,
              Filter: header => {
                return (
                  <Input
                    placeholder='Search...  eg. "room"...'
                    value={header.filterValue || ""}
                    onChange={e => header.setFilter(e.target.value)}
                  />
                );
              }
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName,
              minWidth: 140,
              maxWidth: 200
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Age",
              accessor: "age",
              width: 100,
              aggregate: "average"
            },
            {
              Header: "Visits",
              accessor: "visits",
              width: 100,
              aggregate: "sum"
            },
            {
              Header: "Profile Progress",
              accessor: "progress",
              aggregate: "average",
              minWidth: 200,
              Cell: row => (
                <div
                  style={{
                    width: `${row.value}%`,
                    minWidth: "5px",
                    height: "20px",
                    backgroundColor: `hsla(${row.value}, 100%, 45%, 1)`,
                    borderRadius: "2px",
                    transition: "all .4s ease"
                  }}
                />
              )
            },
            {
              Header: "Status",
              accessor: "status",
              width: 150,
              Cell: row => (
                <span>
                  <span
                    style={{
                      color:
                        row.value === "relationship"
                          ? "#ff2e00"
                          : row.value === "complicated"
                          ? "#ffbf00"
                          : "#57d500",
                      transition: "all .5s ease"
                    }}
                  >
                    &#x25cf;
                  </span>{" "}
                  {row.value === "relationship"
                    ? "Relationship"
                    : row.value === "complicated"
                    ? `Complicated`
                    : "Single"}
                </span>
              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <Table
      {...{
        data,
        columns,
        infinite,
        debug: true
      }}
    />
  );
}
