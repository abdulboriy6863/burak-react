import TabPanel from "@mui/lab/TabPanel";
import { Box, Container, Stack } from "@mui/material";

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[].map((ele, index) => {
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

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>$18</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img src="/icons/pause.svg" />
                  <p>Total</p>
                  <p>$28</p>
                </Box>
              </Box>
            </Box>
          );
        })}
        {true && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
