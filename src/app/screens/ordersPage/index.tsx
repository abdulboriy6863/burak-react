import * as React from "react";
import { TabContext } from "@mui/lab";
import { Box, Container, Input, Stack, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/orders.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="orders-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box
                sx={{
                  borderBottom: 2,
                  paddingBottom: "15px",
                  borderColor: "divider",
                }}
              >
                <Stack className="table-list">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="PAUSED ORDER" value={"1"} />
                    <Tab label="PROCESS ORDER" value={"2"} />
                    <Tab label="FINISHED ORDER" value={"3"} />
                  </Tabs>
                </Stack>
              </Box>
            </Box>
            <Stack>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack className="order-right">
          <Stack className="order-right-top">
            <img src="/img/justin.webp" className="order-right-img" />
            <p className="order-right-name">
              Justin <br /> Nuser
            </p>
            <p className="order-right-border"></p>
            <span className="order-right-location">
              <img src="icons/location.svg" /> South Korea, Busan
            </span>
          </Stack>
          <Stack className="order-right-button">
            <Input
              className="order-right-top-button"
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <Box className="order-right-middle-input" flexDirection={"row"}>
              <Input className="order-rignt-left" placeholder="07 / 24" />
              <Input className="order-rignt-right" placeholder="CVV : 010" />
            </Box>
            <Input
              className="order-right-top-button"
              placeholder="Justin Robertson"
            />

            <Box className="order-right-card" justifyContent={"space-around"}>
              <img src="/icons/western-card.svg" className="visa-card-img" />
              <img src="/icons/western-card.svg" className="visa-card-img" />
              <img src="/icons/western-card.svg" className="visa-card-img" />
              <img src="/icons/western-card.svg" className="visa-card-img" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
