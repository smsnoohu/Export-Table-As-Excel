import {
  DATA_TYPE,
  TABEL_HEADER_LABEL,
  TABEL_HEADER_LABEL_ID,
} from "Mainpanel/constants";

export const columnMetaData = [
  {
    dataType: DATA_TYPE.TEXTBOX,
    label: TABEL_HEADER_LABEL.EMPLOYEE_ID,
    labelId: TABEL_HEADER_LABEL_ID.EMPLOYEE_ID,
    order: 0,
    width: 8,
    excelWidth: 15,
  },
  {
    dataType: DATA_TYPE.TEXTBOX,
    label: TABEL_HEADER_LABEL.NAME,
    labelId: TABEL_HEADER_LABEL_ID.NAME,
    order: 1,
    width: 13,
    excelWidth: 25,
  },
  {
    dataType: DATA_TYPE.SELECT,
    label: TABEL_HEADER_LABEL.DEPARTMENT,
    labelId: TABEL_HEADER_LABEL_ID.DEPARTMENT,
    order: 4,
    width: 11,
    excelWidth: 20,
  },
  {
    dataType: DATA_TYPE.SELECT,
    label: TABEL_HEADER_LABEL.DIVISION,
    labelId: TABEL_HEADER_LABEL_ID.DIVISION,
    order: 5,
    width: 11,
    excelWidth: 20,
  },
  {
    dataType: DATA_TYPE.SELECT,
    label: TABEL_HEADER_LABEL.EMPLOYMENT_TYPE,
    labelId: TABEL_HEADER_LABEL_ID.EMPLOYMENT_TYPE,
    order: 6,
    width: 13,
    excelWidth: 20,
  },
  {
    dataType: DATA_TYPE.SELECT,
    label: TABEL_HEADER_LABEL.POSITION,
    labelId: TABEL_HEADER_LABEL_ID.POSITION,
    order: 7,
    width: 11,
    excelWidth: 20,
  },
  {
    dataType: DATA_TYPE.TEXTBOX,
    label: TABEL_HEADER_LABEL.EMAIL,
    labelId: TABEL_HEADER_LABEL_ID.EMAIL,
    order: 2,
    width: 13,
    excelWidth: 25,
  },
  {
    dataType: DATA_TYPE.TEXTBOX,
    label: TABEL_HEADER_LABEL.PHONE,
    labelId: TABEL_HEADER_LABEL_ID.PHONE,
    order: 3,
    width: 12,
    excelWidth: 15,
  },
];

export const OPTIONS = {
  [TABEL_HEADER_LABEL_ID.DEPARTMENT]: [
    {
      id: "software",
      value: "Software",
    },
    {
      id: "hardware",
      value: "Hardware",
    },
    {
      id: "hr",
      value: "Human Resource",
    },
    {
      id: "sales",
      value: "Sales",
    },
    {
      id: "finanace",
      value: "Finance",
    },
  ],
  [TABEL_HEADER_LABEL_ID.DIVISION]: [
    {
      id: "it",
      value: "Information Technology",
    },
    {
      id: "production",
      value: "Production",
    },
    {
      id: "Marketing",
      value: "Marketing",
    },
    {
      id: "hr",
      value: "Human Resource",
    },
  ],
  [TABEL_HEADER_LABEL_ID.EMPLOYMENT_TYPE]: [
    {
      id: "contract",
      value: "Contract",
    },
    {
      id: "fullTime",
      value: "Full Time",
    },
    {
      id: "partTime",
      value: "Part Time",
    },
    {
      id: "hourlyPay",
      value: "Hourly Pay",
    },
  ],
  [TABEL_HEADER_LABEL_ID.POSITION]: [
    {
      id: "jrEngineer",
      value: "Junior Engineer",
    },
    {
      id: "srEngineer",
      value: "Senior Engineer",
    },
    {
      id: "architect",
      value: "Architect",
    },
    {
      id: "manager",
      value: "Manager",
    },
  ],
};
