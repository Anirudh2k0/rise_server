export const instrumentsTableColumns = [
  {
    accessorKey: "_id",
    header: "Unit",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  // {
  //   accessorKey: "ipAddress",
  //   header: "IP Address",
  // },
  // {
  //   accessorKey: "gateway",
  //   header: "Gateway",
  // },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export const instrumentsFormElements = {
  inputs: [
    {
      id: "_id",
      label: "Unit",
      value: "This field is auto-generated",
      colSpan: 2,
    },
    {
      id: "description",
      label: "Description",
      multiline: true,
      colSpan: 2,
    },
    // {
    //   id: "ipAddress",
    //   label: "IP Address",
    // },
    // {
    //   id: "gateway",
    //   label: "Gateway",
    // },
  ],
  dropdowns: [
    {
      id: "status",
      label: "Status",
      options: [
        {
          value: "Active",
          label: "Active",
        },
        {
          value: "Available",
          label: "Available",
        },
        {
          value: "Offline",
          label: "Offline",
        },
      ],
    },
  ],
};

export const instrumentsDefaultFormData = {
  isEdit: false,
  title: "Add Instrument",
  helperText: "Add Item to the Instruments List",
  formData: {},
};
