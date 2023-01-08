import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
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
import Stat from "./stat";
import Groupchart from "./Groupchart";
import Chart from "./Chart";
import { ExpandMore } from "@mui/icons-material";
import CardT from "./card";

function App() {
  return (
    <Box pl={2}>
      <>
        <Grid container spacing={2}>
          <Grid item lg={2} sm={2} sx={{display:{lg:"block", sm:"none", xs:"none"}, }}>
            <Side />
          </Grid>
          <Grid item lg={10} sm={9}>
            <Box>
              <Stack mt={6} spacing={3}>
                <Grid container spacing={10}>
                  <Grid item lg={8}>
                    <Box className="seach" sx={{ borderRadius: "10px" }}>
                      <Paper elevation={0}>
                        <Stack p={0.9} direction="row" spacing={2}>
                          <Search1 />
                          <InputBase
                            sx={{ color: "#A5B3CD" }}
                            placeholder="Search a transaction"
                            fullWidth
                          />
                        </Stack>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item lg={2}>
                    <Box
                      sx={{
                        border: "1px solid  #EEF1F6",
                        borderRadius: "15px",
                        flexGrow: "2",
                        width: "150px",
                      }}
                      // maxWidth={"200px"}
                    >
                      <Stack p={0.9} direction="row" spacing={0}>
                        <Typography mt={0.6} sx={{ color: "#A5B3CD" }}>
                          Employee
                        </Typography>
                        <Box className="seach" sx={{ borderRadius: "10px" }}>
                          <Paper elevation={0}>
                            <Box p={0.9} pl={1} pr={1}>
                              <Typography sx={{ color: "#0177FB" }}>
                                Admin
                              </Typography>
                            </Box>
                          </Paper>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item lg={2}>
                    <Stack direction="row" spacing={2}>
                      <Box
                        sx={{
                          border: " 1px solid #EEF1F6",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <CardMedia
                          sx={{ width: "20px", height: "20px" }}
                          component="img"
                          image={Notification}
                          alt="green iguana"
                        />
                      </Box>
                      <Box mt={6}>
                        <Avatar
                          alt="Travis Howard"
                          src="https://res.cloudinary.com/dl9swc4gm/image/upload/v1669368450/ynp1ubryobtjuon9lwre.png"
                        />
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
                <Container>
                  <Stat />
                </Container>
                <Box>
                  <Grid container>
                    <Grid item lg={8}>
                      <Stack>
                        <Box
                          className="seach"
                          sx={{
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Paper elevation={0}>
                            <Stack spacing={2}>
                              <Stack></Stack>
                              <Grid container spacing={6}>
                                <Grid item lg={6}>
                                  <Box p={3}>
                                    <Typography>activity</Typography>
                                  </Box>
                                </Grid>
                                <Grid item lg={6}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        border: "1px solid  #EEF1F6",
                                        borderRadius: "15px",

                                        textAlign: "center",
                                        color: "#A5B3CD",
                                      }}
                                    >
                                      <Stack>
                                        {/* <Typography>This week</Typography> */}
                                        <Box sx={{ width: "200px" }}>
                                          <Accordion elevation={0}>
                                            <AccordionSummary
                                              expandIcon={
                                                <Typography
                                                  sx={{ color: "#A5B3CD" }}
                                                >
                                                  <ExpandMore />
                                                </Typography>
                                              }
                                              aria-controls="panel1a-content"
                                              id="panel1a-header"
                                            >
                                              <Typography
                                                sx={{ color: "#A5B3CD" }}
                                              >
                                                This week
                                              </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                              <Typography>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </Typography>
                                            </AccordionDetails>
                                          </Accordion>
                                        </Box>
                                      </Stack>
                                    </Box>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Box p={2}>
                                <Groupchart />
                              </Box>
                            </Stack>
                          </Paper>
                        </Box>
                        <Box></Box>
                      </Stack>
                    </Grid>
                    <Grid item lg={3}>
                      <Stack>
                        <CardT />
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </>
    </Box>
  );
}

export default App;
