import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/material/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
        <Stack className={"main"}>
          <Box className={"category-title"}>Fresh Menu</Box>
          <Stack className={"card-frame"}>
            <CssVarsProvider>
              {newDishes.map((ele, index) => {
                return (
                  <Card key={index} variant="outlined" className={"card"}>
                    <CardOverflow>
                      <div className="product-sale">Normal size</div>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} />
                      </AspectRatio>
                    </CardOverflow>

                    <CardOverflow variant="soft" className={"product-details"}>
                      <Stack className="info">
                        <Stack flexDirection={"row"}>
                          <Typography className={"title"}>
                            {ele.productName}
                          </Typography>
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              height: 24,
                              backgroundColor: "#d9d9d9",
                              mx: 1,
                            }}
                          />{" "}
                          <Typography className={"price"}>$12</Typography>
                        </Stack>
                        <Stack>
                          <Typography className={"views"}>
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
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
