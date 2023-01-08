import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Avatar,
  CardMedia,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
// import Group from "./Group.svg";

import Side from "./side";

import Search1 from "./search1";
import Notification from "./Notification.svg";
import Ellipse2 from "./Ellipse2";
import Ellipse from "./Ellipse";

const Stat = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <Box className="seach" sx={{ borderRadius: "10px" }}>
          <Paper elevation={0}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack p={4} direction="row" spacing={6}>
                <Box>
                  {/* <Ellipse2/> */}
                  <Box sx={{ position: "relative" }}>
                    <Ellipse />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 13,
                        right: 0,
                        left: 15,
                        zIndex: 1,
                      }}
                    >
                      <Typography sx={{ color: "#7EE5DF" }}>
                        <TrendingUpIcon />
                      </Typography>
                      {/* <Ellipse2/> */}
                    </Box>
                  </Box>
                </Box>

                <Stack spacing={1}>
                  <Typography sx={{ color: "#A5B3CD", fontSize: "12px" }}>
                    Total Profit
                  </Typography>

                  <Typography sx={{ fontSize: "20px" }}>$2,360.00</Typography>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box className="seach" sx={{ borderRadius: "10px" }}>
          <Paper elevation={0}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack p={4} direction="row" spacing={6}>
                <Box>
                  {/* <Ellipse2/> */}
                  <Box sx={{ position: "relative" }}>
                    <Ellipse />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 13,
                        right: 0,
                        left: 15,
                        zIndex: 1,
                      }}
                    >
                      <Typography sx={{ color: "#7EE5DF" }}>
                        <TrendingUpIcon />
                      </Typography>
                      {/* <Ellipse2/> */}
                    </Box>
                  </Box>
                </Box>

                <Stack spacing={1}>
                  <Typography sx={{ color: "#A5B3CD", fontSize: "12px" }}>
                    Total Profit
                  </Typography>

                  <Typography sx={{ fontSize: "20px" }}>$2,360.00</Typography>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box className="seach" sx={{ borderRadius: "10px" }}>
          <Paper elevation={0}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack p={4} direction="row" spacing={6}>
                <Box>
                  {/* <Ellipse2/> */}
                  <Box sx={{ position: "relative" }}>
                    <Ellipse />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 13,
                        right: 0,
                        left: 15,
                        zIndex: 1,
                      }}
                    >
                      <Typography sx={{ color: "#7EE5DF" }}>
                        <TrendingUpIcon />
                      </Typography>
                      {/* <Ellipse2/> */}
                    </Box>
                  </Box>
                </Box>

                <Stack spacing={1}>
                  <Typography sx={{ color: "#A5B3CD", fontSize: "12px" }}>
                    Total Profit
                  </Typography>

                  <Typography sx={{ fontSize: "20px" }}>$2,360.00</Typography>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box className="seach" sx={{ borderRadius: "10px" }}>
          <Paper elevation={0}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack p={4} direction="row" spacing={6}>
                <Box>
                  {/* <Ellipse2/> */}
                  <Box sx={{ position: "relative" }}>
                    <Ellipse color1={"#FF6370"} color2={"#E2939A"} />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 13,
                        right: 0,
                        left: 15,
                        zIndex: 1,
                      }}
                    >
                      <Typography sx={{ color: "#7EE5DF" }}>
                        <TrendingUpIcon />
                      </Typography>
                      {/* <Ellipse2/> */}
                    </Box>
                  </Box>
                </Box>

                <Stack spacing={1}>
                  <Typography sx={{ color: "#A5B3CD", fontSize: "12px" }}>
                    Total Profit
                  </Typography>

                  <Typography sx={{ fontSize: "20px" }}>$2,360.00</Typography>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Stat;
