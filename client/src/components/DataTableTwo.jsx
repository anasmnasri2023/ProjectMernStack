import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/css/style.css";
import { MOCK_DATA } from "../data/mock";

const dataTwo = MOCK_DATA;

const DataTableTwo = () => {
  useEffect(() => {
    const dataTableTwo = new DataTable("#dataTableTwo", {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [
        {
          select: 2,
          sortSequence: ["desc", "asc"],
        },
        {
          select: 3,
          sortSequence: ["desc"],
        },
        {
          select: 4,
          cellClass: "green",
          headerClass: "red",
        },
      ],
    });
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="data-table-common data-table-two max-w-full overflow-x-auto">
        <table className="table w-full table-auto" id="dataTableTwo">
          <thead>
            <tr>
              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Name</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Project Manager</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th data-type="date" data-format="YYYY/DD/MM">
                <div className="flex items-center justify-between gap-1.5">
                  <p>Start Date</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th data-type="date" data-format="YYYY/DD/MM">
                <div className="flex items-center justify-between gap-1.5">
                  <p>End Date</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>

              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Status</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>

              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Client Name</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTwo.map((data, index) => {
              return (
                <tr key={index} data={data}>
                  <td>{data.project_name}</td>
                  <td>{data.project_manager}</td>
                  <td>{data.start_date}</td>
                  <td>{data.end_date}</td>

                  <td>
                    <span
                      className={`p-2 text-sm text-white ${
                        data.status === "on hold"
                          ? "bg-red"
                          : data.status === "in progress"
                          ? "bg-secondary"
                          : "bg-meta-3"
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td>{data.client_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableTwo;
