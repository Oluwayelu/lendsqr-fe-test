import { useState, useEffect, useContext, SetStateAction } from "react";

import {
  active_users,
  coins_colored,
  dashboard_users,
  users_loan,
} from "assets";
import { Card, Loader, Pagination, Table } from "components";
import { Dashboard as DashboardLayout } from "layout";
import { AppContext } from "context";
import {
  getNumberOfActiveUsers,
  getNumberOfUsersWithLoans,
  getNumberOfUsersWithSavings,
} from "services/Users";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [count, setCount] = useState<number>(0);
  const { staticData, dynamicData, setDynamicData } = useContext(AppContext);

  const indexOfLastUser = currentPage * pageSize;
  const indexOfFirstUser = indexOfLastUser - pageSize;
  const currentData = dynamicData.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    setCount(dynamicData.length);
  }, [dynamicData.length]);

  console.log(dynamicData);

  const getMoreItemsByOffset = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      {staticData.length ? (
        <>
          <h2>Users</h2>

          <div className="card-container">
            <Card
              image={dashboard_users}
              title="Users"
              content={staticData.length}
              imgColor="#DF18FF"
            />
            <Card
              image={active_users}
              title="Active Users"
              content={getNumberOfActiveUsers(staticData)}
              imgColor="#5718FF"
            />
            <Card
              image={users_loan}
              title="Users with Loans"
              content={getNumberOfUsersWithLoans(staticData)}
              imgColor="#F55F44"
            />
            <Card
              image={coins_colored}
              title="Users with Savings"
              content={getNumberOfUsersWithSavings(staticData)}
              imgColor="#FF3366"
            />
          </div>

          <div className="table-container">
            <Table
              dynamicData={currentData}
              staticData={staticData}
              setDynamicData={setDynamicData}
            />
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={count}
            pageSize={pageSize}
            setPageSize={setPageSize}
            onPageChange={(page: SetStateAction<number>) =>
              getMoreItemsByOffset(page)
            }
          />
        </>
      ) : (
        <Loader />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
