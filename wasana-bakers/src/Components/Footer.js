import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import Logo from "../Assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <Box
        sx={{
          paddingLeft: { md: "100px" },
          paddingRight: { md: "100px" },
          paddingTop: { md: "20px" },
          paddingBottom: { md: "20px" },
          backgroundColor: "#f2f2f2",
        }}
      >
        <Grid container display={"flex"}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <Box
                component="img"
                margin={"30px"}
                sx={{ marginTop: "10px", height: "150px", width: "150px" }}
                alt="Wasana Bakers Logo"
                src={Logo}
              />
            </IconButton>
            <Typography>
              Horana Wasana Bakers Bombuwala Branch: Amazing Designs and
              Delicious Icing Cakes for all Occasions, friendly service and
              reasonable prices.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h6">Links</Typography>
              <Typography sx={{ marginTop: "20px" }}>About Us</Typography>
              <Typography sx={{ marginTop: "5px" }}>Our Products</Typography>
              <Typography sx={{ marginTop: "5px" }}>Contact Us</Typography>
              <Typography sx={{ marginTop: "5px" }}>Custom Design</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h6">Contact Details</Typography>
              <Typography sx={{ marginTop: "20px" }}>
                Phone: +94 71 551 4646
              </Typography>
              <Typography sx={{ marginTop: "5px" }}>
                Email: info@example.com
              </Typography>
              <Typography sx={{ marginTop: "5px" }}>
                Address: Horana Wasana Bakers, Mankada, Bombuwala, kalutara
                South
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h6">Follow Us</Typography>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        width="100%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor="#171717"
        color="white"
      >
        <Typography padding={"10px"} fontSize={"14px"} color="#d1d1d1">
          &copy; 2023 Horana Wasana Bakers Bombuwala. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
