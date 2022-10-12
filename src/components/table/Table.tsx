import moment from "moment";

import { filter } from "assets";
import { Filter, Loader } from "components";
import { useComponentVisible } from "hooks";
import { getUserStatus } from "services/Users";
import OptionsTrigger from "./OptionsTrigger";

import type { FC } from "react";
import type { IUser } from "types";

type Props = {
  dynamicData: IUser[] | [];
  staticData: IUser[] | [];
  setDynamicData: (data: IUser[]) => void;
};

const tableHead = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const Table: FC<Props> = ({ dynamicData, setDynamicData, staticData }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleOpenFilterForm = (): void => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={index}>
                <p>{head}</p>
                <button type="button" onClick={toggleOpenFilterForm}>
                  <img src={filter} className="icon" alt="filter" />
                </button>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dynamicData.length ? (
            dynamicData.map((user, key) => (
              <tr key={key}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{moment(user.createdAt).format("MMM Do, h:mm a")}</td>
                <td>
                  <div
                    className={` ${
                      getUserStatus(
                        user.education.monthlyIncome,
                        user.education.loanRepayment
                      ) === "active" && "badge-active"
                    }  ${
                      getUserStatus(
                        user.education.monthlyIncome,
                        user.education.loanRepayment
                      ) === "inactive" && "badge-inactive"
                    } ${
                      getUserStatus(
                        user.education.monthlyIncome,
                        user.education.loanRepayment
                      ) === "pending" && "badge-pending"
                    } ${
                      getUserStatus(
                        user.education.monthlyIncome,
                        user.education.loanRepayment
                      ) === "blacklisted" && "badge-blacklisted"
                    } badge`}
                  >
                    {getUserStatus(
                      user.education.monthlyIncome,
                      user.education.loanRepayment
                    )}
                  </div>
                </td>
                <td>
                  <OptionsTrigger id={user.id} />
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
      <Filter
        filterFormRef={ref}
        isFilterFormOpened={isComponentVisible}
        staticData={staticData}
        dynamicData={dynamicData}
        setDynamicData={setDynamicData}
      />
    </div>
  );
};

export default Table;

