import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardCover from "@mui/joy/CardCover";

const newDishes = [
  {
    productName: "Cutlet",
    imagePath:
      "https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=0&k=20&c=cYxRAfU7OdjJCK4M7dbH4YUIk7SGqETlDvONBEOATuw=",
  },
  { productName: "Kebab", imagePath: "/img/fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

export default function NewDishes() {
  return (
    <div className="new-dishes-frame">
      <Container>
        <Stack className="new-dishes-section">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="card-frame">
            <CssVarsProvider>
              {newDishes.map((ele, index) => {
                return (
                  <Card key={index} variant="outlined" className="card">
                    <CardOverflow>
                      <div className="product-sale">Normal size</div>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} alt="" />
                      </AspectRatio>
                    </CardOverflow>
                    <CardOverflow variant="soft" className="product-details">
                      <CardCover className={"card-cover"} />
                      <Stack className="info">
                        <CardContent orientation="horizontal">
                          <Typography className={"title"}>
                            {ele.productName}
                          </Typography>
                          <Divider orientation="vertical" />
                          <Typography
                            level="body-xs"
                            textColor="text.secondary"
                            sx={{ fontWeight: "md" }}
                          >
                            $6
                          </Typography>
                          <Typography
                            sx={{
                              marginLeft: "40px",
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            1
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </CardContent>
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
