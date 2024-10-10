import { IStatementPeriod, ILeastExpectedOccurence } from "./constantTypes";

// The number of months that your statement covers.
export const statementPeriod: IStatementPeriod = 12;

export const leastExpectedOccurence: ILeastExpectedOccurence =
  statementPeriod === 12 ? 8 : statementPeriod === 8 ? 6 : 4;
