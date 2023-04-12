import PropTypes from 'prop-types';
import MaterialReactTable from 'material-react-table';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircleRounded, Delete, Edit } from '@mui/icons-material';

function DataGrid(props) {
  const { editButtonEnabled, columns = [], rows = [] } = props;

  return (
    <MaterialReactTable
      columns={columns}
      data={rows}
      muiTablePaperProps={{ elevation: 0 }}
      enableDensityToggle={false}
      enableColumnActions={false}
      enableFullScreenToggle={false}
      enableEditing={editButtonEnabled}
      renderTopToolbarCustomActions={() => <TableToolbar {...props} />}
      renderRowActions={(tableProps) => (
        <TableCustomRows {...tableProps} {...props} />
      )}
    />
  );
}

export default DataGrid;

function TableToolbar({
  title,
  addButtonEnabled = false,
  addButtonLabel = 'Add',
  onAddButtonClick = () => {},
}) {
  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Typography fontWeight='bold' textTransform='uppercase'>
        {title}
      </Typography>
      {addButtonEnabled && (
        <Button
          size='small'
          variant='contained'
          endIcon={<AddCircleRounded />}
          onClick={onAddButtonClick}
          color='info'
        >
          {addButtonLabel}
        </Button>
      )}
    </Box>
  );
}

function TableCustomRows({
  row,
  editButtonEnabled,
  onEditButtonClick,
  deleteButtonEnabled,
  onDeleteButtonClick,
}) {
  return (
    <Box display='flex' gap='1rem'>
      {editButtonEnabled && (
        <Tooltip arrow title='Edit'>
          <IconButton onClick={() => onEditButtonClick(row)} color='primary'>
            <Edit />
          </IconButton>
        </Tooltip>
      )}
      {deleteButtonEnabled && (
        <Tooltip arrow title='Delete'>
          <IconButton onClick={() => onDeleteButtonClick(row)} color='error'>
            <Delete />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}

DataGrid.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  title: PropTypes.any,
  addButtonEnabled: PropTypes.bool,
  addButtonLabel: PropTypes.string,
  onAddButtonClick: PropTypes.func,
  editButtonEnabled: PropTypes.bool,
  onEditButtonClick: PropTypes.func,
  deleteButtonEnabled: PropTypes.bool,
  onDeleteButtonClick: PropTypes.func,
};
