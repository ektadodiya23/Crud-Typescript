
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import './Crud.style.css';



export default function Header() {
  return (
    <div className="header_part shadow-lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#2196f3", p: 2 }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 5 }}
            ></IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ fontWeight: "medium" }}
            >
              Crud
            </Typography>
          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
