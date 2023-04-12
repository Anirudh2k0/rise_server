import isEqual from "lodash/isEqual";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Dropdown from "@/components/Dropdown/Dropdown";

function FormDialog({
  open,
  helperText,
  setOpen,
  title,
  inputItems = [],
  dropdownItems = [],
  onSubmit,
  defaultFormData,
  isEdit = false,
  loadingBtn = false,
}) {
  const endIcon = loadingBtn ? (
    <CircularProgress size={16} sx={{ color: "gray" }} />
  ) : (
    ""
  );

  const [formData, setFormData] = useState({});

  const disableBtn =
    loadingBtn || (isEdit && isEqual(formData, defaultFormData));

  /**
   * Event Handlers
   */

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData, isEdit);
    }
  };

  useEffect(() => {
    if (open && defaultFormData) {
      setFormData(() => ({ ...defaultFormData }));
    }
  }, [open, defaultFormData]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      component="form"
      onSubmit={handleSubmit}
    >
      <DialogTitle component="div">
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>{title}</Box>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{helperText}</DialogContentText>
        <Grid container spacing={3} columns={2} mt={0.5}>
          {/* Text Fields */}
          {inputItems.map((inputItem) => (
            <Grid key={inputItem.id} item xs={inputItem.colSpan || 1}>
              <TextField
                name={inputItem.id}
                label={inputItem.label}
                type={inputItem.type || "text"}
                InputProps={{ readOnly: inputItem.readOnly }}
                disabled={inputItem.disabled}
                value={formData[inputItem.id] || inputItem.value || ""}
                multiline={inputItem.multiline}
                helperText={inputItem.helperText}
                onChange={handleChange}
                // size='small'
                variant="outlined"
                required
                fullWidth
                minRows={2}
              />
            </Grid>
          ))}
          {console.log(dropdownItems)}
          {/* Dropdown Fields */}
          {dropdownItems.map((dropdownItem) => (
            <Grid key={dropdownItem.id} item xs={1}>
              <Dropdown
                id={dropdownItem.id}
                label={dropdownItem.label}
                options={dropdownItem.options}
                value={formData[dropdownItem.id] || ""}
                onChange={handleChange}
                // variant='standard'
                required
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={disableBtn}
          endIcon={endIcon}
        >
          {title}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
