import * as React from "react";
import {
  Badge,
  Box,
  Button,
  colors,
  Container,
  Input,
  Stack,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Pagination from "@mui/material/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/* reduxe slice selector */

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-frame">
      <Container>
        <Stack className="main">
          <Stack className="top-title-input">
            <Box className="title">Burak Restaurant</Box>
            <Stack className="input-butt-box">
              <Input
                className="input"
                placeholder="Type here"
                disableUnderline
                sx={{
                  border: "none",
                  borderRadius: "8px",
                  marginRight: "70px",
                }}
              />
              <Button
                className="searching-button"
                variant={"contained"}
                color={"primary"}
              >
                Search
                <SearchOutlinedIcon />
              </Button>
            </Stack>
          </Stack>
          <Stack className="product-butt-img">
            <Stack className="top-butt-box">
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
            <Stack className="butt-swiper-box">
              <Stack className="left-butt-box">
                <Button variant="contained" color="primary" className="rotate">
                  Dish
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  className="rotate"
                >
                  Salad
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  className="rotate"
                >
                  Drink{" "}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="rotate"
                >
                  Desert
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  className="rotate"
                >
                  Other
                </Button>
              </Stack>
              <Stack className="wrap-box">
                {products.length !== 0 ? (
                  products.map((product: Product) => {
                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                    const sizeVolume =
                      product.productCollection === ProductCollection.DRINK
                        ? product.productVolume + "liter"
                        : product.productSize + "size";
                    return (
                      <Stack className="product-img-box">
                        <Stack key={product._id} className="full-img-box">
                          <Stack
                            className="image-box"
                            sx={{
                              backgroundImage: `url(${imagePath})`,
                            }}
                          >
                            <div className="product-sale">{sizeVolume}</div>
                            <Stack className="view-basket-box">
                              <Button className="shop-basket">
                                <img src={"/icons/shopping-cart.svg"} />
                              </Button>
                              <Button className="view-bnt" sx={{}}>
                                <Badge
                                  badgeContent={product.productViews}
                                  color="secondary"
                                >
                                  <RemoveRedEyeIcon
                                    sx={{
                                      color:
                                        product.productViews === 0
                                          ? "gray"
                                          : "white",
                                    }}
                                  />
                                </Badge>
                              </Button>
                            </Stack>
                          </Stack>
                          <Stack className="imgage-title-box">
                            <span className="prd-name">
                              {product.productName}
                            </span>
                            <div className="product-cost">
                              <MonetizationOnIcon />
                              {product.productPrice}
                            </div>
                          </Stack>
                        </Stack>
                      </Stack>
                    );
                  })
                ) : (
                  <Box className="no-data">New products are not available</Box>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2} className="pagination">
            <Pagination count={3} className="pagination-num" />
          </Stack>
        </Stack>
      </Container>
      <div className="burak-img">
        <Container>
          <Stack className="main-burak-box">
            <Box className="title-burak-box">Our Family Brand</Box>
            <Stack className="br-img-boxes">
              <Stack className="burak-card">
                <Box className="burak-img-card">
                  <img src="/img/kebab-fresh.webp" alt="" />
                </Box>
              </Stack>
              <Stack className="burak-card">
                <Box className="burak-img-card">
                  <img src="/img/kebab-fresh.webp" alt="" />
                </Box>
              </Stack>
              <Stack className="burak-card">
                <Box className="burak-img-card">
                  <img src="/img/kebab-fresh.webp" alt="" />
                </Box>
              </Stack>
              <Stack className="burak-card">
                <Box className="burak-img-card">
                  <img src="/img/kebab-fresh.webp" alt="" />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className="adress">
        <Container>
          <Stack className="adress-area">
            <Box className="title-adress">Our adress</Box>

            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps?q=36.623494,127.446876&z=15&output=embed"
              width="1320"
              height="500"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
