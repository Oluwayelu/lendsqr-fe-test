import { Navbar, Sidebar } from "components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Dashboard: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />

      <div className="layout-container">
        <Sidebar />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
