import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveProcessOrdes } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

//REDUX SELECTOR
const processOrdesRetriver = createSelector(
  retrieveProcessOrdes,
  (processOrders) => ({ processOrders })
);

export default function ProcessOrders() {
  const { processOrders } = useSelector(processOrdesRetriver);

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-inf ">
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className="order-name-price">
                      <div className="order-name-price-inf">
                        <img src={imagePath} className="order-dish-img" />
                        <p className="title-dish">{product.productName}</p>
                      </div>
                      <Box className="price-box">
                        <div className="price-box-inf">
                          <p>${item.itemPrice}</p>
                          <img src="/icons/close.svg" />
                          <p>{item.itemQuantity}</p>
                          <img src="/icons/pause.svg" />
                          <p style={{ marginLeft: "15px" }}>
                            ${item.itemQuantity * item.itemPrice}
                          </p>
                        </div>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box-process">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "22px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src="/icons/pause.svg" />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                  <p className="data-compl">
                    {moment().format("YY-MM-DD HH:mm")}
                  </p>
                </Box>

                <Button variant="contained" className="process-pay-button">
                  VERIFY TO FULFIL
                </Button>
              </Box>
            </Box>
          );
        })}
        {!processOrders ||
          (processOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src="/icons/noimage-list.svg"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
