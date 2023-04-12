import { useState } from 'react';
import { Box } from '@mui/material';

import FormDialog from '@/components/Common/FormDialog';
import DataGrid from '@/components/DataGrid/DataGrid';

/**
 * DEFAULT FORM DETAILS PROP STRUCTURE
 * 
    defaultFormDetails = {
        isEdit: false,
        title: 'Add Instrument',
        helperText: 'Add Item to the Instruments List',
        formData: {},
    };

 */

const queryFn = () => ({});
const mutationFn = () => [() => {}, {}];

function CRUDDataGrid({
  defaultFormDetails = {},
  getQueryFn = queryFn,
  postQueryFn = mutationFn,
  updateQueryFn = mutationFn,
  deleteQueryFn = mutationFn,
  columns,
  title,
  modalTitle,
  inputsList,
  dropdownsList,
}) {
  const [open, setOpen] = useState(false);
  const [formDetails, setFormDetails] = useState(defaultFormDetails);

  /**
   * Api calls
   */
  const { data } = getQueryFn();

  const [postQuery, { isLoading: isPosting }] = postQueryFn();

  const [updateQuery, { isLoading: isUpdating }] = updateQueryFn();

  const [deleteQuery] = deleteQueryFn();

  const handleSubmit = async (formData, isEdit) => {
    try {
      if (isEdit) {
        await updateQuery(formData);
      } else {
        await postQuery(formData);
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Event Handlers
   */

  const handleAdd = () => {
    setFormDetails(() => defaultFormDetails);
    setOpen(true);
  };

  const handleEdit = (row) => {
    setFormDetails((prev) => ({
      ...prev,
      isEdit: true,
      title: `Edit ${modalTitle}`,
      helperText: '',
      formData: row.original,
    }));
    setOpen(true);
  };

  const handleDelete = (row) => {
    if (window.confirm('Are you sure to delete')) {
      deleteQuery(row.original._id);
    }
  };

  return (
    <Box>
      <DataGrid
        title={title}
        columns={columns}
        rows={data}
        addButtonEnabled
        addButtonLabel={`Add ${modalTitle}`}
        onAddButtonClick={handleAdd}
        editButtonEnabled
        onEditButtonClick={handleEdit}
        deleteButtonEnabled
        onDeleteButtonClick={handleDelete}
      />
      <FormDialog
        title={formDetails.title}
        helperText={formDetails.helperText}
        defaultFormData={formDetails.formData}
        isEdit={formDetails.isEdit}
        inputItems={inputsList}
        dropdownItems={dropdownsList}
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        disableSubmitBtn={isPosting || isUpdating}
      />
    </Box>
  );
}

export default CRUDDataGrid;
