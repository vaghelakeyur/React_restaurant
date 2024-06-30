import React from "react";
import { Menulist } from "../data/data.jsx";
// import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Header from "../components/Layout/Header";

const Manu = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Menulist.map((menu) => (
          <Card
            sx={{
              maxWidth: "390px",
              display: "flex",
              m: 2,
              boxShadow: "0 4px 8px black",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Manu;
