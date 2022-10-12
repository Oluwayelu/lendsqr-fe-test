import {
  badge_percent,
  bank,
  briefcase,
  chart,
  clipboard,
  coin,
  galaxy,
  guarantors,
  handshake,
  loan,
  loan_request,
  preference,
  savings,
  scroll,
  service_account,
  signout,
  tire,
  transaction,
  users,
  user_check,
  user_times,
} from "assets";

import type { Sidebar } from "types";

export const LOGIN = "/";
export const DASHBOARD = "/dashboard";
export const USERS = "/users";
export const USER_DETAILS = "/users/:id";
export const DUMMY = "#";

export const API =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const sidebar: Sidebar[] = [
  {
    icon: briefcase,
    link: DUMMY,
    title: "Switch Organization",
    dropdown: true,
  },
  {
    icon: briefcase,
    title: "Dashbaord",
    link: DASHBOARD,
  },
  {
    title: "Customers",
    link: DUMMY,
    routes: [
      { title: "Users", icon: users, link: USERS },
      { title: "Guarantors", icon: guarantors, link: DUMMY },
      { title: "Loans", icon: loan, link: DUMMY },
      { title: "Decision Models", icon: handshake, link: DUMMY },
      { title: "Savings", icon: savings, link: DUMMY },
      { title: "Loan Request", icon: loan_request, link: DUMMY },
      { title: "Whitelist", icon: user_check, link: DUMMY },
      { title: "Karama", icon: user_times, link: DUMMY },
    ],
  },
  {
    title: "Business",
    link: DUMMY,
    routes: [
      { title: "Organization", icon: briefcase, link: DUMMY },
      { title: "Loan Products", icon: loan_request, link: DUMMY },
      { title: "Savings and Product", icon: bank, link: DUMMY },
      { title: "Fees and Charges", icon: coin, link: DUMMY },
      { title: "Transactions", icon: transaction, link: DUMMY },
      { title: "Services", icon: galaxy, link: DUMMY },
      { title: "Service Account", icon: service_account, link: DUMMY },
      { title: "Settlements", icon: scroll, link: DUMMY },
      { title: "Reports", icon: chart, link: DUMMY },
    ],
  },

  {
    title: "Settings",
    link: DUMMY,
    routes: [
      { title: "Preference", icon: preference, link: DUMMY },
      { title: "Fees and Pricing", icon: badge_percent, link: DUMMY },
      { title: "Audit Logs", icon: clipboard, link: DUMMY },
      { title: "Systems Message", icon: tire, link: DUMMY },
    ],
  },
  {
    icon: signout,
    title: "Logout",
    link: LOGIN,
  },
];

export const more = [
  {
    link: "/",
  },
];
