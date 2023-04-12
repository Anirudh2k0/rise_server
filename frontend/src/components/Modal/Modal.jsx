import { Box, IconButton, Modal as MUIModal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

function Modal({
  title,
  open,
  setOpen,
  width = "80vw",
  height = "80vh",
  src,
  children,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MUIModal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={width}
        height={height}
        boxShadow={24}
        bgcolor="background.paper"
        sx={{ transform: "translate(-50%, -50%)" }}
        borderRadius={2}
        p={1}
        border="1px solid lightgray"
      >
        <Box display="flex" alignItems="center">
          <Typography fontWeight="bold" flexGrow={1} pl={4}>
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <Box overflow="auto" p={2}>
          <img src={src} />
          {children}
        </Box>
      </Box>
    </MUIModal>
  );
}

export default Modal;
// sx={{
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   }}
