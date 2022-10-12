type SidebarRoutes = {
  title: string;
  icon: string;
  link: string;
};

export interface Sidebar {
  title: string;
  icon?: string;
  link?: string;
  dropdown?: boolean;
  routes?: SidebarRoutes[];
}

export interface IUser {
  [x: string]: any;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

export interface IAppContext {
  showSidebar: boolean;
  isError: boolean;
  setIsError: (value: boolean) => void;
  setShowSidebar: (value: boolean) => void;
  toggle: () => void;
  staticData: IUser[];
  setStaticData: (value: IUser[]) => void;
  dynamicData: IUser[];
  setDynamicData: (value: IUser[]) => void;
}

interface IObjectKeys {
  [key: string]: string;
}

export interface IFilterFields extends IObjectKeys {
  orgName: string;
  userName: string;
  email: string;
  createdAt: string;
  phoneNumber: string;
}
