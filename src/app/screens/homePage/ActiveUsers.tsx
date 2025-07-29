import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { AspectRatio, CardOverflow, CssVarsProvider } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";

const activeUsers = [
  {
    productName: "하은",
    imagePath:
      "https://photosrush.net/wp-content/uploads/Korean-Girls-Pics.webp",
  },
  {
    productName: "Daniel",
    imagePath:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    productName: "은서",
    imagePath:
      "https://e1.pxfuel.com/desktop-wallpaper/383/679/desktop-wallpaper-most-beautiful-stylish-profile-facebook-for-cool-girls-stylish-girls.jpg",
  },
  { productName: "Gayratbek", imagePath: "/img/Gayratbek.webp" },
];

export default function ActiveUsers() {
  return (
    <div>
      <Container>
        <Stack className="users-frame">
          <Box className="user-title">Active User</Box>
          <Stack className="user-img-card">
            <CssVarsProvider>
              {activeUsers.map((ele, index) => {
                return (
                  <Card key={index} variant="outlined" className={"card"}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} />
                      </AspectRatio>
                    </CardOverflow>
                    <CardOverflow variant="soft" className={"product-details"}>
                      <Stack className="user-nick">
                        <Typography className={"title"}>
                          {ele.productName}
                        </Typography>
                      </Stack>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
