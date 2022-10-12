import { RefObject, FC, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

import { getUniqueOrganizations, handleFilterUserStatus } from "services/Users";
import { IUser, IFilterFields } from "types";
import FilterField from "./FilterField";
import { filterHandlers } from "utils";

const filterFormVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

type Props = {
  filterFormRef: RefObject<HTMLDivElement>;
  isFilterFormOpened: boolean;
  staticData: IUser[] | [];
  dynamicData: IUser[] | [];
  setDynamicData: (data: IUser[]) => void;
};

const Filter: FC<Props> = ({
  filterFormRef,
  isFilterFormOpened,
  staticData,
  dynamicData,
  setDynamicData,
}) => {
  const [selectValue, setSelectValue] = useState<string>("");

  // Filter Functions
  const applyFilters = (arr: IUser[], filters: IFilterFields): IUser[] => {
    const filterKeys = Object.keys(filters);

    return arr.filter((o) =>
      filterKeys.every((key) => {
        const handler = filterHandlers.get(key);
        if (key === "status") {
          return (
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            !handler ||
            handleFilterUserStatus(
              o.education.monthlyIncome,
              o.education.loanRepayment,
              filters[key]
            )
          );
        } else {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          return !handler || handler(o[key], filters[key]);
        }
      })
    );
  };

  const [formData, setFormData] = useState<IFilterFields>({
    orgName: "",
    userName: "",
    email: "",
    createdAt: "",
    phoneNumber: "",
    status: "",
  });

  const setFieldValue = (field: string, value: string): void => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const resetForm = (): void => {
    setFormData({
      orgName: "",
      userName: "",
      email: "",
      createdAt: "",
      phoneNumber: "",
    });
    setDynamicData(staticData);
  };

  const filterData = (event: React.FormEvent): void => {
    event.preventDefault();
    if (
      formData.orgName !== "" ||
      formData.userName !== "" ||
      formData.email !== "" ||
      formData.createdAt !== "" ||
      formData.phoneNumber !== ""
    ) {
      setDynamicData(applyFilters(dynamicData, formData));
    } else {
      setDynamicData(staticData);
    }
  };
  return (
    <AnimatePresence>
      {isFilterFormOpened && (
        <motion.div
          key="filter-form-wrapper"
          variants={filterFormVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="filter"
          ref={filterFormRef}
        >
          <form onSubmit={filterData} className="filter-form">
            <FilterField
              type="select"
              label="Organization"
              value={formData.orgName}
              name="orgName"
              setFieldValue={setFieldValue}
              options={getUniqueOrganizations(staticData)}
            />

            <FilterField
              type="text"
              label="User"
              value={formData.userName}
              name="userName"
              setFieldValue={setFieldValue}
            />

            <FilterField
              type="text"
              label="Email"
              value={formData.email}
              name="email"
              setFieldValue={setFieldValue}
            />

            <FilterField
              type="date"
              label="Date"
              value={formData.createdAt}
              name="createdAt"
              setFieldValue={setFieldValue}
            />

            <FilterField
              type="text"
              label="Phone Number"
              value={formData.phoneNumber}
              name="phoneNumber"
              setFieldValue={setFieldValue}
            />

            <FilterField
              type="select"
              label="Status"
              value={selectValue}
              name="status"
              setFieldValue={setSelectValue}
              options={["active", "inactive", "blacklisted", "pending"]}
            />

            <div className="filter-actions">
              <button type="button" onClick={resetForm} className="secondary">
                Reset
              </button>
              <button type="submit" className="primary">
                Filter
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Filter;
