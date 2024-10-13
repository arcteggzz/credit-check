import { getSterilizedData } from "./functions/getSterilizedData";
import { groupCreditTransactionsByAmount } from "./functions/groupCreditTransactionsByAmount";
import { getHighFrequencyCreditTransactionsList } from "./functions/getHighFrequencyCreditTransactionsList";
import { getDescriptionFrequencies } from "./functions/getDescriptionFrequencies";
import {
  IAccountDetails,
  ITransaction,
  GroupedCreditTransaction,
  IDescriptionFrequencyTable,
  // ISenderFrequencyTable,
  // IDateFrequencyTable,
} from "./types";
import { config } from "./constants";

export const creditAlgorithm = () => {
  // step 1
  const sterilizedData: IAccountDetails = getSterilizedData();

  // step 2
  const creditTransactions: ITransaction[] = sterilizedData.creditTransactions;

  // step 3
  const sortedCreditFrequency: GroupedCreditTransaction[] =
    groupCreditTransactionsByAmount(creditTransactions);
  // with this data, you can draw your frequency graph/table
  // the total number of all counts in this array must match the number of credit transactions.
  // there must be no duplicate transaction ids in all the ids of the array
  // the array must be sorted according to the highest number of re-occuring transactions

  // step 4
  // determine the algorithm to get number of frequencies to check.
  // right now, I am using an arbituary algorithm based on the "leastExpectedOccurence" constant.10/10/24
  const leastChecks = config.leastExpectedOccurence;

  // step 5
  // determine the list of credit transactions that meet the pre-defined threshold.
  // all credit transactions in this array must be checked.
  const highFrequencyCreditTransactions: GroupedCreditTransaction[] =
    getHighFrequencyCreditTransactionsList(leastChecks, sortedCreditFrequency);

  // step 6
  // if there are no frequencies up to this leastExpectedOccurence, return erratic data.
  if (highFrequencyCreditTransactions.length < 1)
    return "This account is erratic. NOT A SALARY ACCOUNT. DOES NOT QUALIFY FOR SALARY ACCOUNT.";

  //BRANCH STEP 7
  //if there are no frequencies up to this leastExpectedOccurence, use range splitting to calculate frequency.
  //this is done because some people might be receiving salary in different amount. eg 400k 399k 400.2k 401k etc etc.
  // this is not in the first Mvp sha

  //step 7
  //FOR EACH OF THE ITEMS THAT QUALIFY FOR THE LIMIT CHECK, RUN A "TEGA ALGORITHM" on each.

  //SUB-STEP 7-A1
  // get the number of transactions that have similar descriptions based on keywords
  // returns the keyword and the number of transactons that had that key word.
  const descriptionFrequencies: IDescriptionFrequencyTable =
    getDescriptionFrequencies(highFrequencyCreditTransactions);

  console.log(descriptionFrequencies);

  //SUB-STEP 7-A2
  //get the count of the highest occuring frequency
  // const numberOfTransactionsWithSimilarDescription =
  //   descriptionFrequencies[0].count;

  //SUB-STEP 7-B1
  //CHECK IF THEY HAVE A SIMILAR SENDER
  //use metadata from mono for this.
  // const sameSenderFrequencies: ISenderFrequencyTable = getSenderFrequencies(
  //   highFrequencyCreditTransactions
  // );

  //SUB-STEP 7-B2
  //CHECK IF THE highest occuring sender for this money is a company name using AI
  // const numberOfTransactionsWithSameSender = sameSenderFrequencies[0].count;

  //SUB-STEP 7-C1
  //CHECK IF THEY OCCURED IN THE SAME PERIOD OF EVERY MONTH
  //do most of them occur arounf the same time period?
  // const sameDateFrequencies: IDateFrequencyTable = getDatePeriodFrequencies(
  //   highFrequencyCreditTransactions
  // );

  //SUB-STEP 7-C2
  //CHECK IF THE highest occuring sender for this money is a company name using AI
  // const numberOfTransactionsWithSameDatePeriod = sameDateFrequencies[0].count;

  //SUB-STEP 7-D1
};
