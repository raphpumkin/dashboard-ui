import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { CardMedia, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
// import Group from "./Group.svg";
import card from "./card.svg";
import stats from "./stats.svg";
import Activity from "./Activity.svg";
import Calendar from "./Calendar.svg";
import Notification from "./Notification.svg";
import Safety from "./safety.svg";
import logot from "./logot.svg";
import Group from "./Group";

const Side = () => {
  return (
    <Box p={2} sx={{ borderRight: "1px solid  #EEF1F6", height: "100vh" }}>
      <Stack mt={6} spacing={3} sx={{ position: "fixed" }}>
        <Box mb={5}>
          <Stack direction="row">
            <CardMedia
              sx={{ width: "30px", height: "30px" }}
              component="img"
              image={logot}
              alt="green iguana"
            />
            <Typography>STARPAYE</Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2}>
          <Typography sx={{ color: "red" }}>
            <Group color={"#0177FB"} />
          </Typography>

          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Dashboard
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={card}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              My Card
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={stats}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Statistic
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={Activity}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Activity
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={Calendar}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Calendar
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={Notification}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Notification
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CardMedia
            sx={{ width: "20px", height: "20px" }}
            component="img"
            image={Safety}
            alt="green iguana"
          />
          <Box>
            <Typography
              mt={-0.2}
              gutterBottom
              sx={{ color: "#A5B3CD", fontSize: ".9rem" }}
            >
              Security
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Side;
