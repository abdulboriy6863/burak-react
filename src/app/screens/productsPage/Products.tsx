import * as React from "react";
import { Box, Button, Container, Icon, Input, Stack } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Products() {
  return (
    <div className="products-frame">
      <Container>
        <Stack className="products-section">
          <Stack className="title-search-box">
            <Box className="title">Bumarak Restaurant</Box>
            <Stack className="searching-box">
              <Input className="input" placeholder="Type here" />
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
        </Stack>
      </Container>
    </div>
  );
}
