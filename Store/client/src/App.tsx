import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { Box, Container } from "@mui/material";
import { pullFromLocalStorage } from "./features/cart/cartSlice";
import * as api from "./api/api";

export const BASE_URL = api.BASE_URL;
export const BNR_URL = api.BNR_URL;

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  dispatch(pullFromLocalStorage());
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Header />
          <Box
            className="product-grid"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "center",
            }}
          >
            <RouterDOM />
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
