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
  range: IAmountRange;
};

//single account type
export type IAccountDetails = {
  //owner details
  owner: IAccountOwner;

  accountType: IAccount;
  totalCreditCount: number;
  totalDebitCount: number;

  //transactions list
  transactions: ITransaction[];
  creditTransactions: ITransaction[];
  debitTransactions: ITransaction[];
};

export type IFrequencyTable = {
  id: number | string;
  amount: string | number;
  count: number;
  transactionIds: string[];
}[];

export type IFrequencyDescriptionTable = {
  name: string;
  keyword: string;
  count: number;
  transactionIds: string[];
}[];
