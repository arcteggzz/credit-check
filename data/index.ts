import {
  IAccountDetails,
  IAccount,
  IAmountRange,
  IFrequencyTable,
} from "../types";

export const sampleAccountDetails: IAccountDetails = {
  owner: {
    firstName: "John",
    lastName: "Doe",
    middleName: "M.",
    age: 35,
  },
  accountType: IAccount.B, // Current Account
  totalCreditCount: 5,
  totalDebitCount: 3,
  transactions: [
    {
      id: 1,
      date: "2024-09-01",
      type: "credit",
      amount: 150000,
      narration: "Salary Payment",
      range: IAmountRange.B, // 100000-299999
    },
    {
      id: 2,
      date: "2024-09-05",
      type: "debit",
      amount: 50000,
      narration: "Grocery Shopping",
      range: IAmountRange.A, // 0-99999
    },
    {
      id: 3,
      date: "2024-09-10",
      type: "credit",
      amount: 200000,
      narration: "Bonus",
      range: IAmountRange.B, // 100000-299999
    },
    {
      id: 4,
      date: "2024-09-15",
      type: "debit",
      amount: 100000,
      narration: "Rent Payment",
      range: IAmountRange.B, // 100000-299999
    },
    {
      id: 5,
      date: "2024-09-20",
      type: "credit",
      amount: 120000,
      narration: "Freelance Project",
      range: IAmountRange.B, // 100000-299999
    },
  ],
  creditTransactions: [
    {
      id: 1,
      date: "2024-09-01",
      type: "credit",
      amount: 150000,
      narration: "Salary Payment",
      range: IAmountRange.B,
    },
    {
      id: 3,
      date: "2024-09-10",
      type: "credit",
      amount: 200000,
      narration: "Bonus",
      range: IAmountRange.B,
    },
    {
      id: 5,
      date: "2024-09-20",
      type: "credit",
      amount: 120000,
      narration: "Freelance Project",
      range: IAmountRange.B,
    },
  ],
  debitTransactions: [
    {
      id: 2,
      date: "2024-09-05",
      type: "debit",
      amount: 50000,
      narration: "Grocery Shopping",
      range: IAmountRange.A,
    },
    {
      id: 4,
      date: "2024-09-15",
      type: "debit",
      amount: 100000,
      narration: "Rent Payment",
      range: IAmountRange.B,
    },
  ],
};

export const frequencyTest: IFrequencyTable = [
  {
    id: 1,
    amount: "2000",
    count: 12,
    transactionIds: [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ],
  },
  {
    id: 2,
    amount: "1000",
    count: 4,
    transactionIds: ["1", "2", "3", "4"],
  },
  {
    id: 3,
    amount: "5000",
    count: 1,
    transactionIds: ["17"],
  },
];
