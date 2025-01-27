import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "~/layout";
import { Home } from "~/screens";
import { ROUTES } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route element={<Home />} path={ROUTES.home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
