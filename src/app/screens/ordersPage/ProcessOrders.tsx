import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-inf ">
              <Box className="order-box-scroll">
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className="order-name-price">
                      <div className="order-name-price-inf">
                        <img
                          src="/img/lavash.webp"
                          className="order-dish-img"
                        />
                        <p className="title-dish">Lavash</p>
                      </div>
                      <Box className="price-box">
                        <div className="price-box-inf">
                          <p>$9</p>
                          <img src="/icons/close.svg" />
                          <p>2</p>
                          <img src="/icons/pause.svg" />
                          <p style={{ marginLeft: "15px" }}>$24</p>
                        </div>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box-process">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>$18</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "22px" }} />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img src="/icons/pause.svg" />
                  <p>Total</p>
                  <p>$28</p>
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
      </Stack>
    </TabPanel>
  );
}
