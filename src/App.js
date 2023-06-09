import React from "react";
// import Navbar from "./components/Header";
import BodyContent from "./components/Content";
import SkillsCard from "./components/Skills";
import ProjectsCard from "./components/Portfolio";
import ContactUs from "./components/Contact";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Menu,
  Container,
  Button,
  MenuItem,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import profilePic from "../src/assets/images/Profilepic.png";
import "../style.css";

const pages = ["About", "Skills", "PortFolio", "Contact"];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const NavRef = React.useRef(null);
  const Nav1Ref = React.useRef(null);
  const Nav2Ref = React.useRef(null);
  const Nav3Ref = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (page) => {
    console.log("page", page);

    if (page === "About") {
      NavRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (page === "Skills") {
      Nav1Ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (page === "PortFolio") {
      Nav2Ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      Nav3Ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        md={12}
        sm={12}
        xs={12}
        spacing={2}
        padding={2}
      >
        <Grid item Container md={12} sm={12} xs={12}>
          <AppBar
            position="static"
            sx={{ background: "transparent", boxShadow: "inherit" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Avatar size="sm" src={profilePic} sx={{ margin: 2 }} />

                <Typography
                  variant="body1"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    marginLeft: "5px",

                    fontWeight: 700,

                    color: "inherit",
                    textDecoration: "none"
                  }}
                >
                  Ajit Chaubey
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left"
                    }}
                    open={Boolean(anchorElNav)}
                    sx={{
                      display: { xs: "block", md: "none" }
                    }}
                    onClose={handleCloseNavMenu}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="caption"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 4,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,

                    fontWeight: 700,

                    color: "inherit",
                    textDecoration: "upperCase"
                  }}
                >
                  AJIT CHAUBEY
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center"
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => handleClick(page)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ borderRadius: "12px" }}
                  >
                    <a
                      href="https://drive.google.com/uc?export=download&id=1MItZGID3viTlx4u6ViCn9Xv1ozdC_wTH"
                      download
                    >
                      Download CV
                    </a>
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
        {/* <Navbar /> */}
        <BodyContent ref={NavRef} />
        <SkillsCard ref={Nav1Ref} />
        <ProjectsCard ref={Nav2Ref} />
        <ContactUs ref={Nav3Ref} />
      </Grid>
    </>
  );
}
export default App;
