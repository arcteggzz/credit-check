import { IFrequencyTable, ITransaction } from "../types";
import { frequencyTest } from "../data";

export const getCreditFrequency = (list: ITransaction[]): IFrequencyTable => {
  return frequencyTest;
};
