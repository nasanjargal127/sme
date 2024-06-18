import { IconName } from "./components/Icon";

export type AccountType = {
  accountNumber: string;
  balance: number;
  bankName: string;
  id: number;
  primaryColor: string;
  title: string;
};

export type ServiceType = { icon: IconName; text: string };
