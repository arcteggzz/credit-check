import { IDescriptionFrequencyTable, GroupedCreditTransaction } from "../types";
import { descriptionFrequencies } from "../data";
import { keywordsList } from "../constants";

//use the keywordsList in this function
export const getDescriptionFrequencies = (
  list: GroupedCreditTransaction[]
): IDescriptionFrequencyTable => {
  return descriptionFrequencies;
};
