import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeView } from "./views/home/homeView";
import { SignInView } from "./views/sign-in/signInView";
import { SignUpView } from "./views/sign-up/signUpView";
import { SignOutView } from "./views/sign-out/SignOutView";
import { OnboardingView } from "./views/onboarding/onboardingView";
import { DashboardView } from "./views/dashboard/dashboardView";
import { NewEventView } from "./views/new-event/newEventView";
import { AccountView } from "./views/account/accountView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomeView />} />
      <Route path={"/signin"} element={<SignInView />} />
      <Route path={"/signup"} element={<SignUpView />} />
      <Route path={"/signout"} element={<SignOutView />} />
      <Route path={"/onboarding"} element={<OnboardingView />} />
      <Route path={"/dashboard"} element={<DashboardView />} />
      <Route path={"/event/new"} element={<NewEventView />} />
      <Route path={"/account"} element={<AccountView />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
