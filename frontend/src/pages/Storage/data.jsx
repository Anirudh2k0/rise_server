export const storageTableColumns = [
  {
    accessorKey: "_id",
    header: "Unit ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export const storageFormElements = {
  inputs: [
    {
      id: "_id",
      label: "Unit ID",
      value: "This field is auto-generated",
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "capacity",
      label: "Capacity",
    },
    {
      id: "type",
      label: "Type",
    },
  ],
  dropdowns: [
    {
      id: "status",
      label: "Status",
      options: [
        {
          value: "Offline",
          label: "Offline",
        },
        {
          value: "Online",
          label: "Online",
        },
      ],
    },
  ],
};

export const storagesDefaultFormData = {
  isEdit: false,
  title: "Add Storage",
  helperText: "Add Item to the storages List",
  formData: {},
};
