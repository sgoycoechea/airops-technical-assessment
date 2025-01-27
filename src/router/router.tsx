import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "~/layout";
import { Workflows } from "~/screens";
import { ROUTES } from "./routes";

// The Router and usage of react-router-dom wasn't really necessary,
// since we have single page, but did it as an extra

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Workflows />} path={ROUTES.home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
