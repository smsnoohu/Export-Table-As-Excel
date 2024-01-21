import { useEffect, useState } from "react";

import { Renderer } from "Mainpanel/Renderer";
import { excelExport, generateID } from "Mainpanel/common";
import { DEFAULT_TABLE_STATE } from "Mainpanel/constants";
import { columnMetaData } from "Mainpanel/metaData";
import "./styles.scss";

export const ExportExcel = () => {
  const [tableHeader, setTableHeader] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const setHeaderData = () => {
      const sortedData = columnMetaData.sort((a, b) =>
        a.order > b.order ? 1 : -1
      );
      setTableHeader(sortedData);
    };
    columnMetaData && setHeaderData();
  }, []);

  useEffect(() => {
    const setIntialTableData = () => {
      const newState = [
        {
          ...DEFAULT_TABLE_STATE,
          id: generateID(),
        },
      ];
      setTableData(newState);
    };
    setIntialTableData();
  }, []);

  const onChange = (event) => {
    const { name, value, id } = event.target;
    const newState = tableData?.map((data) =>
      data.id === id ? { ...data, [name]: value } : data
    );
    setTableData(newState);
  };

  const addNewRow = () => {
    const newState = {
      ...DEFAULT_TABLE_STATE,
      id: generateID(),
    };
    setTableData([...tableData, newState]);
  };

  const removeRow = (id) => {
    const newState = tableData?.filter((data) => data.id !== id);
    setTableData(newState);
  };

  return (
    <div className="wrapper">
      <table className="dataTable">
        <thead>
          <tr>
            {tableHeader?.map((data) => (
              <th key={data.labelId} width={`${data.width}%`}>
                {data.label}
              </th>
            ))}
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, index) => (
            <tr key={`row_${index}`}>
              {tableHeader.map((hData, idx) => (
                <td key={`${hData.labelId}_column_${index}_${idx}`}>
                  <Renderer
                    data={hData}
                    onChange={onChange}
                    value={data[hData.labelId]}
                    id={data.id}
                  />
                </td>
              ))}
              <td>
                {tableData.length - 1 === index && (
                  <button className="btn primary" onClick={addNewRow}>
                    +
                  </button>
                )}
                {tableData.length - 1 !== index && (
                  <button
                    className="btn danger"
                    onClick={() => removeRow(data.id)}
                  >
                    -
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="btn primary"
        onClick={() => excelExport(tableHeader, tableData)}
      >
        Export Excel
      </button>
    </div>
  );
};
