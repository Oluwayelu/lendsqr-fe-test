// import { FeatureBundle, LazyMotion } from "framer-motion";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Loader } from "components";
import { AppProvider } from "context";
import { Dashboard, Login, UserDetails, Users } from "pages";
import { DASHBOARD, LOGIN, USERS, USER_DETAILS } from "routes";

import "./styles/app.scss";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route path={USERS} element={<Users />} />
            <Route path={USER_DETAILS} element={<UserDetails />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Suspense>
  );
}

export default App;

