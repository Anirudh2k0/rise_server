import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Modal, Box, Typography } from "@mui/material";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function createData(desc, size, instruments, Storage, analyzed) {
  return { desc, size, instruments, Storage, analyzed };
}

const rows = [
  createData("IMAGE1", "1MB", 20001, 30001, "Yes"),
  createData("IMAGE2", "1.5MB", 20002, 30002, "Yes"),
  createData("IMAGE3", "97KB", 20002, 30003, "Yes"),
  createData("IMAGE4", "1.3MB", 20003, 30001, "Yes"),
];

export default function ProjectDetails() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [vol, setVol] = useState([]);
  const [dice, setDice] = useState([]);
  const [prec, setPrec] = useState([]);

  const ShowToastMessage = () => {
    toast.warn("Please Wait While the Image is being Analyzed", {
      autoClose: 1500,
    });
    toast.success("Analysis Sent !", {
      position: toast.POSITION.TOP_CENTER,
      delay: 3000,
    });
    setTimeout(() => {
      setDice(0.72);
      setPrec(0.63);
      setVol(16);
    }, 5000);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image&nbsp;Description</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Instruments</TableCell>
              <TableCell align="right">Storage</TableCell>
              <TableCell align="right">Analyzed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.desc}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Button onClick={handleOpen}>{row.desc}</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ width: "100%", background: "white" }}
                  >
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      width="80vw"
                      height="80vh"
                      boxShadow={24}
                      bgcolor="background.paper"
                      sx={{ transform: "translate(-50%, -50%)" }}
                      borderRadius={2}
                      p={1}
                      border="1px solid lightgray"
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <img
                          src={img1}
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            width: "400px",
                          }}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <ul>
                            <li>FileName: {img1.slice(-24)}</li>
                            <li>Sample Organizsm: Mitochondria</li>
                            <li>Sampling Time: 10s</li>
                            <li>Resolution: 1024*1024</li>
                            <li>No.of Images in Volume: {vol}</li>
                            <li>Precision: {prec}</li>
                            <li>Dice Score: {dice}</li>
                          </ul>
                        </Typography>
                        <span
                          style={{
                            justifyContent: "space-around",
                            display: "flex",
                            marginTop: "50px",
                          }}
                        >
                          <div
                            style={{
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            <Button
                              onClick={ShowToastMessage}
                              variant="contained"
                            >
                              Send Analysis <SendIcon />
                            </Button>
                          </div>
                          <ToastContainer />
                        </span>
                      </Typography>
                    </Box>
                  </Modal>
                </TableCell>
                <TableCell align="right">{row.size}</TableCell>
                <TableCell align="right">{row.instruments}</TableCell>
                <TableCell align="right">{row.Storage}</TableCell>
                <TableCell align="right">{row.analyzed}</TableCell>
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
    </div>
  );
}
