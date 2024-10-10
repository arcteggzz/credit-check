import { getSterilizedData } from "./functions/getSterilizedData";
import { getCreditFrequency } from "./functions/getCreditFrequency";
import { getHighFrequencyCreditTransactionsList } from "./functions/getHighFrequencyCreditTransactionsList";
import { IAccountDetails, ITransaction, IFrequencyTable } from "./types";
import { leastExpectedOccurence } from "./constants";

const baseMain = () => {
  //step 1
  const sterilizedData: IAccountDetails = getSterilizedData();

  // step 2
  const creditTransactions: ITransaction[] = sterilizedData.creditTransactions;

  // step 3
  const sortedCreditFrequency: IFrequencyTable =
    getCreditFrequency(creditTransactions);
  // with this data, you can draw your frequency graph/table
  // the total number of all counts in this array must match the number of credit transactions.
  // there must be no duplicate transaction ids in all the ids of the array
  // the array must be sorted according to the highest number of re-occuring transactions

  //step 4
  //determine the algorithm to get number of frequencies to check.
  //right now, I am using an arbituary algorithm based on the "leastExpectedOccurence" constant.
  const leastChecks = leastExpectedOccurence;

  //step 5
  //determine the list of credit transactions that meet the pre-defined threshold.
  //all credit transactions in this array must be checked.
  const highFrequencyCreditTransactions: IFrequencyTable =
    getHighFrequencyCreditTransactionsList(leastChecks, sortedCreditFrequency);

  //step 6
  //if there are no frequencies up to this leastExpectedOccurence, return erratic data.
  if (highFrequencyCreditTransactions.length < 0)
    return "This account is erratic. NOT A SALARY ACCOUNT. DOES NOT QUALIFY FOR SALARY ACCOUNT.";

  //step 7
  //CHECK IF THEY HAVE A SIMILAR DESCRIPTION.
  //do most of them carry "salary" or any of those key words that we discussed.
  //seperate them into categories using the descriptions of the transaction.
  const salaryCreditTable: IFrequencyDescriptionTable = organizeSalaryCredits(
    highFrequencyCreditTransactions
  );

  //step 8
  //CHECK IF THEY HAVE A SIMILAR SENDER

  //step 8
  //CHECK IF THEY OCCURED ON THE SAME PERIOD EVERY MONTH
  //do most of them occur arounf the same time period?

  // const dateDistribution: IDateDistribution = getDateDistribution(
  //   sortedCreditFrequency
  // );
};

baseMain();
