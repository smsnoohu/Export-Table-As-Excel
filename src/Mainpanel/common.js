import * as ExcelJS from "exceljs";
import saveAs from "file-saver";

import { DATA_TYPE } from "Mainpanel/constants";
import { OPTIONS } from "Mainpanel/metaData";

export const generateID = () => (+new Date()).toString(36).slice(-5);

export const excelExport = (headerData, tableData) => {
  let workBook = new ExcelJS.Workbook();
  let workbookName = "Company_Data.xlsx";
  let worksheetName = "Employee Data";
  let workSheet = workBook.addWorksheet(worksheetName, {
    properties: {
      tabColor: { argb: "FFFF0000" },
    },
  });

  workSheet.columns = headerData.reduce(function (column, data) {
    column.push({
      key: data.labelId,
      header: data.label,
      width: data.excelWidth,
    });
    return column;
  }, []);

  workSheet.getRow(1).font = { bold: true };

  workSheet.addRows(tableData);

  let col;
  headerData.forEach((data, index) => {
    if (data.dataType === DATA_TYPE.SELECT) {
      col = workSheet.getColumn(index + 1);
      const options = OPTIONS[data.labelId].map((dept) => dept.value);
      setListColumn(col, options);
    }
  });

  workBook.xlsx.writeBuffer().then(function (buffer) {
    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      workbookName
    );
  });
};

const setListColumn = (col, options) => {
  col.eachCell(function (cell, rowNumber) {
    if (rowNumber > 1) {
      cell.dataValidation = {
        type: "list",
        allowBlank: false,
        formulae: [`"${options}"`],
      };
    }
  });
  return col;
};
