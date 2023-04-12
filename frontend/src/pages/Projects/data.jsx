import { Link } from "react-router-dom";

export const projectsTableColumns = [
  {
    accessorKey: "_id",
    header: "Project ID",
    Cell: renderLink,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "imagesScanned",
    header: "Images Scanned",
  },
  {
    accessorKey: "imagesAnalysed",
    header: "Images Analysed",
  },
  {
    accessorKey: "instruments",
    header: "Instruments",
  },
  {
    accessorKey: "storageUnits",
    header: "Storage Units",
  },
];

export const projectsFormElements = {
  inputs: [
    {
      id: "_id",
      label: "Project ID",
      disabled: true,
      value: "This field is auto-generated",
      colSpan: 2,
    },
    {
      id: "description",
      label: "Description",
      multiline: true,
      colSpan: 2,
    },
    {
      id: "type",
      label: "Type",
    },
    {
      id: "imagesScanned",
      label: "Images Scanned",
      type: "number",
    },
    {
      id: "imagesAnalysed",
      label: "Images Analysed",
      type: "number",
    },
    {
      id: "instruments",
      label: "Instruments",
      type: "number",
    },
    {
      id: "storageUnits",
      label: "Storage Units",
      type: "number",
    },
  ],
};

export const projectsDefaultFormData = {
  isEdit: false,
  title: "Add Project",
  helperText: "Add Item to the Projects List",
  formData: {},
};

function renderLink({ cell }) {
  const value = cell.getValue();
  return <Link to={`/projects/${value}`}>{value}</Link>;
}
