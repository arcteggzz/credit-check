export enum IAmountRange {
  A = "0-99999",
  B = "100000-299999",
  C = "300000-499999",
  D = "500000-999999",
  E = "1000000-10000000",
}

export enum IAccount {
  A = "Savings",
  B = "Current",
  C = "Domiciliary",
  D = "Fixed Deposit",
  E = "Corporate/Business",
  F = "Target/Goal-Oriented",
  G = "Non-Resident Nigerian",
  H = "Joint",
  I = "Salary",
}

export type IAccountOwner = {
  firstName: string;
  lastName: string;
  middleName?: string;
  age?: number;
};

//single transaction type
export type ITransaction = {
  id: string | number;
  date: string;
  type: "credit" | "debit";
  amount: number;
  narration: string; //drescription
  range?: IAmountRange;
  to?: string;
  from?: string;
};

//single account type
export type IAccountDetails = {
  owner: IAccountOwner;
  accountType: IAccount;
  totalCreditCount: number;
  totalDebitCount: number;
  creditTransactions: ITransaction[];
  debitTransactions: ITransaction[];
};

export type GroupedCreditTransaction = {
  id: number | string;
  amount: string | number;
  count: number;
  transactionIds: string[];
};

export type IFrequencyDescriptionTable = {
  name: string;
  keyword: string;
  count: number;
  transactionIds: string[];
}[];

export type IDescriptionFrequencyTable = {
  keyword: string;
  count: number;
  transactionIds: string[];
}[];

export type ISenderFrequencyTable = {
  employer: string;
  count: number;
  transactionIds: string[];
}[];

export type IDateFrequencyTable = {
  datePeriod: string;
  count: number;
  transactionIds: string[];
}[];
