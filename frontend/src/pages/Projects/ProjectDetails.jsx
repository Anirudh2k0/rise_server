import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  Stack,
} from "@mui/material/";

import { Link } from "react-router-dom";
import { img1, img2, img3, img4 } from "@/images";

const images = [img1, img2, img3, img4];

const columns = [
  { id: "column1", label: "Image" },
  { id: "column2", label: "Size" },
  { id: "column3", label: "Instruments" },
  { id: "column4", label: "Storage" },
  { id: "column5", label: "Analyzed" },
];

const data = [
  {
    id: 1,
    size: "1MB",
    instruments: "642cac389f6c33d2aa73fb3bt",
    storage: "642cf5059f6c33d2aa73fb64",
    analyzed: "Yes",
  },
  {
    id: 2,
    size: "1.5MB",
    instruments: "642e348f9d5705d80e5c0269",
    storage: "64397b01feef5ad86c0a7cc4",
    analyzed: "Yes",
  },

  {
    id: 3,
    size: "970KB",
    instruments: "642e348f9d5705d80e5c0269",
    storage: "64397b01feef5ad86c0a7cc4",
    analyzed: "Yes",
  },

  {
    id: 4,
    size: "1.3MB",
    instruments: "643a0659feef5ad86c0a7ce0",
    storage: "642cf5059f6c33d2aa73fb64",
    analyzed: "Yes",
  },
];

const ModalContent = ({ image, handleClose }) => {
  const [precision, setPrecision] = useState(0);
  const handleAnalysisClick = () => {
    setPrecision(0.72);
  };
  return (
    <ModalContentWrapper>
      <ModalCloseButton onClick={handleClose}>X</ModalCloseButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={image} alt="modal content" style={{ height: "250px" }} />
        <ul style={{ marginTop: "10px" }}>
          <li>Sample Organizsm: Mitochondria</li>
          <li>Sampling Time: 10s</li>
          <li>Resolution: 1024*1024</li>
          {precision !== 0 && <li>Precision: {precision}</li>}
        </ul>
        <div style={{ marginTop: "10px" }}>
          <Button onClick={handleAnalysisClick} variant="outlined">
            Send Analysis
          </Button>
        </div>
      </div>
    </ModalContentWrapper>
  );
};
const ModalCloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  fontSize: "1.5rem",
  color: "blue",
}));
const ModalContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "peachpuff",
  height: "70%",
  outline: 0,
  boxShadow: "0px 3px 15px rgba(0,0,0,0.5)",
  borderRadius: "10px",
  padding: "1rem",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export default function ProjectDetails() {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (image) => {
    setOpen(true);
    setCurrentImage(image);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <Button onClick={() => handleOpen(images[row.id - 1])}>
                    Image
                  </Button>
                </TableCell>
                <TableCell align="center">{row.size}</TableCell>
                <TableCell align="center">{row.instruments}</TableCell>
                <TableCell align="center">{row.storage}</TableCell>
                <TableCell align="center">{row.analyzed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        direction="row"
        marginTop={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" style={{ backgroundColor: "#3399FF" }}>
          <Link to={`/projects/:id/manageStorage`}>Manage Storage Data</Link>
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#3399FF" }}>
          <Link to={`/projects/:id/manageInstrument`}>
            Manage Instrument Data
          </Link>
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#3399FF" }}>
          <Link to={`/projects/:id/newImage`}>Scan New Image</Link>
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div ref={null}>
          <ModalContent image={currentImage} handleClose={handleClose} />
        </div>
      </Modal>
    </>
  );
}
