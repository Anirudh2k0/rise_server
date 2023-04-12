import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import PageRoutes from "@/Routes/PageRoutes";
import { getUser } from "./utils/authUtils";

function App() {
  return (
    <Box className="app">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        <Sidebar />
        <Box
          component="main"
          flexGrow={1}
          p={3}
          height="100%"
          width="100%"
          overflow="auto"
        >
          <Toolbar />
          <PageRoutes />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
