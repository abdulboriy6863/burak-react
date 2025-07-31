import * as React from "react";
import { Box, Button, Card, Container, Input, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { CssVarsProvider } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CardCover from "@mui/joy/CardCover";

const products = [
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Gayratbek", imagePath: "/img/fresh.webp" },
  { productName: "Gayratbek", imagePath: "/img/lavash.webp" },
  {
    productName: "Gayratbek",
    imagePath:
      "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/g9c9pse7gf.jpg",
  },
];

const bumarak = [
  {
    imagePath:
      "https://www.esquireme.com/wp-content/uploads/sites/9/cloud/2021/09/08/6Q8A5606.jpg",
  },
  { imagePath: "/img/seafood.webp" },
  { imagePath: "/img/seafood.webp" },
  { imagePath: "/img/seafood.webp" },
];

export default function Products() {
  return (
    <div className="products-frame">
      <Container>
        <Stack className="products-section">
          <Stack className="title-search-box">
            <Box className="title">Bumarak Restaurant</Box>
            <Stack className="searching-box">
              <Input
                className="input"
                placeholder="Type here"
                disableUnderline
                sx={{
                  border: "none",
                  borderRadius: "8px",
                }}
              />
              <Button
                className={"searching-button"}
                variant={"contained"}
                color={"primary"}
              >
                Search
                <SearchOutlinedIcon />
              </Button>
            </Stack>
          </Stack>
          <Stack className="button-top-box">
            <Button variant="contained" color="primary">
              New
            </Button>
            <Button variant="contained" color="secondary">
              Price
            </Button>
            <Button variant="contained" color="secondary">
              Views
            </Button>
          </Stack>
          <Stack className="product-box">
            <Stack className="button-left-box"></Stack>
            <Stack className={"product-img-box"}>
              <CssVarsProvider>
                {products.length !== 0 ? (
                  products.map((ele, index) => {
                    return (
                      <Card key={index} variant="outlined" className={"card"}>
                        <div className="product-sale">Large size</div>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} />
                        </AspectRatio>

                        <Stack className="info">
                          <Stack>
                            <Typography className={"title"}>
                              {ele.productName}
                            </Typography>

                            <Stack marginTop={"5px"}>
                              <Box
                                className="cost"
                                display={"flex"}
                                flexDirection={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                <PaidIcon className="icon" />
                                <Typography className="cost">15</Typography>
                              </Box>
                            </Stack>
                          </Stack>
                          {/* <Stack spacing={2}>
                            <Pagination count={10} color="secondary" />
                          </Stack> */}
                        </Stack>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data">New products are not available</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <div className="burak-img-frame">
        <Container>
          <Stack className="burak-sesction">
            <Box className="burak-title">Our Family Brands</Box>
            <Stack className="burak-img">
              <CssVarsProvider>
                {bumarak.length !== 0 ? (
                  bumarak.map((ele, index) => {
                    return (
                      <Card
                        key={index}
                        variant="outlined"
                        className={"card-bottom"}
                      >
                        <AspectRatio ratio={"4/6"}>
                          <img
                            src={ele.imagePath}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </AspectRatio>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data">New products are not available</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
