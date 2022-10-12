import { API } from "routes";
import { IUser } from "types";

/**
 * Returns if User is active.
 *
 * @param {IUser} user user informations.
 * @return {boolean} x if User is active.
 */

const isUserActive = (user: IUser): boolean => {
  const userAverageSalary =
    (parseFloat(user.education.monthlyIncome[0]) +
      parseFloat(user.education.monthlyIncome[1])) /
    2;
  if (parseFloat(user.education.loanRepayment) <= userAverageSalary * 0.2) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns number of active users.
 *
 * @param {IUser[]} users all users information.
 * @return {number} x number of active users.
 */
const getNumberOfActiveUsers = (users: IUser[]): number => {
  let activeUsers = 0;
  users.forEach((user) => {
    if (isUserActive(user)) {
      activeUsers += 1;
    }
  });
  return activeUsers;
};

/**
 * Returns true if user have loans to repay.
 *
 * @param {IUser} user user informations.
 * @return {boolean} user have loans to repay.
 */
const isUserHasLoan = (user: IUser): boolean => {
  if (parseFloat(user.education.loanRepayment) > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns number of users with loans.
 *
 * @param {IUser[]} user all users information.
 * @return {boolean} x number of users with loans.
 */
const getNumberOfUsersWithLoans = (users: IUser[]): number => {
  let usersWithLoans = 0;
  users.forEach((user) => {
    if (isUserHasLoan(user)) {
      usersWithLoans += 1;
    }
  });
  return usersWithLoans;
};

/**
 * Returns if User has savings.
 *
 * @param {IUser} user user informations.
 * @return {boolean} x if User has savings.
 */
const isUserHasSavings = (user: IUser): boolean => {
  if (
    parseFloat(user.accountBalance) > parseFloat(user.education.loanRepayment)
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns number of users with savings.
 *
 * @param {IUser[]} users user informations.
 * @return {boolean} x number of users with savings.
 */
const getNumberOfUsersWithSavings = (users: IUser[]): number => {
  let usersWithSavings = 0;
  users.forEach((user) => {
    if (isUserHasSavings(user)) {
      usersWithSavings += 1;
    }
  });
  return usersWithSavings;
};

/**
 * Returns user current status.
 *
 * 		User is active if loan repayment is less than or equal to 20% of average salary
 * 		User is pending if loan repayment is greater than 20% of average salary but less than or equal to 35% of average salary
 * 		User is inactive if loan repayment is greater than 35% of average salary but less than or equal to 50% of average salary
 * 		User is blacklisted if loan repayment is greater than 50% of average salary
 *
 * @param {string[]} salaryRange user salaryRange.
 * @param {string} loanRepayment user loan repayment.
 * @return {string} x user current staus ["active", "pending", "inactive", "blacklisted"].
 */
const getUserStatus = (
  salaryRange: string[],
  loanRepayment: string
): string => {
  const averageSalary =
    (parseFloat(salaryRange[0]) + parseFloat(salaryRange[1])) / 2;

  if (parseFloat(loanRepayment) <= averageSalary * 0.2) {
    return "active";
  } else if (
    parseFloat(loanRepayment) > averageSalary * 0.2 &&
    parseFloat(loanRepayment) <= averageSalary * 0.35
  ) {
    return "pending";
  } else if (
    parseFloat(loanRepayment) > averageSalary * 0.35 &&
    parseFloat(loanRepayment) <= averageSalary * 0.5
  ) {
    return "inactive";
  } else {
    return "blacklisted";
  }
};

/**
 * Returns x unique organizations.
 *
 * @param {IUser[] | []} users user informations.
 * @return {string[]} x unique organizations..
 */
const getUniqueOrganizations = (users: IUser[] | []): string[] => {
  const orgNames = users.map((dataInstance) => dataInstance.orgName);
  const uniqueOrgNames = users.filter(
    ({ orgName }, index) => !orgNames.includes(orgName, index + 1)
  );

  return uniqueOrgNames.map((org) => org.orgName);
};

/**
 * Returns x filter user status.
 *
 * @param {string[]} monthlyIncome user monthly income.
 * @param {string} loanRepayment user loan repayment.
 * @param {string} status user status.
 * @return {string} x unique organizations..
 */
const handleFilterUserStatus = (
  monthlyIncome: string[],
  loanRepayment: string,
  status: string
): boolean => getUserStatus(monthlyIncome, loanRepayment) === status;

/**
 * Returns all users fetched from the API.
 *
 * @return {Promise<IUser[]>} x promise of all users fetched from api.
 */
const getAllUsers = async (): Promise<IUser[]> => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

/**
 * Returns x user from users saved in localstorage.
 *
 * @param {string} id id of user.
 * @return {Promise<IUser[]>} x promise of all users fetched from api.
 */
const getUserById = async (id: string): Promise<IUser> => {
  let users = JSON.parse(localStorage.getItem("lendsqr-users") as string);
  const user = users.find((user: IUser) => user.id === id);
  return user;
};

export {
  getAllUsers,
  getUserById,
  isUserActive,
  getNumberOfActiveUsers,
  isUserHasLoan,
  getNumberOfUsersWithLoans,
  isUserHasSavings,
  getNumberOfUsersWithSavings,
  getUserStatus,
  getUniqueOrganizations,
  handleFilterUserStatus,
};
