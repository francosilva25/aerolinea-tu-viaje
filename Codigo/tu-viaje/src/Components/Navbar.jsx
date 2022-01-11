import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#fff", boxShadow: "none" }}>
        <Toolbar sx={{ mx: 20 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            <Link
              href="/"
              color="inherit"
              underline="none"
              style={{
                color: "#3F51B5",
                fontFamily: "Cronos Pro",
                fontStyle: "normal",
                fontWeight: "bolder",
                fontSize: "30px",
                lineHeight: "58px",
              }}
            >
              tu-viaje
            </Link>
          </Typography>
          <Button
            size="small"
            href="#text-buttons"
            sx={{ ml: 3 }}
            style={{ color: "#000" }}
          >
            <Link underline="none" href="/ayuda" style={{ color: "#000" }}>
              Vuelos
            </Link>
          </Button>
          <Button
            size="small"
            href="#text-buttons"
            sx={{ ml: 3 }}
            style={{ color: "#000" }}
          >
            <Link underline="none" href="/ayuda" style={{ color: "#000" }}>
              Ayuda
            </Link>
          </Button>
          <Button
            size="small"
            href="#text-buttons"
            sx={{ ml: 3 }}
            style={{ color: "#000" }}
          >
            Agendar Cita
          </Button>
          <Button
            size="small"
            href="#text-buttons"
            sx={{ ml: 3 }}
            style={{ color: "#000" }}
          >
            <Link underline="none" href="/login" style={{ color: "#000" }}>
              Iniciar Sesión
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
