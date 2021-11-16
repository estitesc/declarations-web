import {
  evident_alts,
  hella_alts,
  punc_alts,
  these_alts,
  truths_alts,
  WeightedWord,
  we_alts,
} from "../constants/pieces";
import _ from "lodash";

const getPiece = (weightedWords: WeightedWord[]): string => {
  const plumpedArray: string[] = [];
  weightedWords.forEach((weightedWord: WeightedWord) => {
    for (let i = 0; i < weightedWord.weight; i++) {
      plumpedArray.push(weightedWord.word);
    }
  });

  return _.sample(plumpedArray) || "";
};

export const getDecl = () => {
  return `${getPiece(we_alts)} hold ${getPiece(these_alts)} ${getPiece(
    truths_alts
  )} to be ${getPiece(hella_alts)}${getPiece(evident_alts)}${getPiece(
    punc_alts
  )}`;
};
