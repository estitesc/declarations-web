export interface WeightedWord {
  word: string;
  weight: number;
}

export const we_alts: WeightedWord[] = [
  { word: "We", weight: 20 },
  { word: "I", weight: 4 },
  { word: "Ya'll", weight: 4 },
  { word: "Why", weight: 1 },
  { word: "The Georges", weight: 1 },
];

export const these_alts: WeightedWord[] = [
  { word: "these", weight: 8 },
  { word: "our", weight: 1 },
  { word: "their", weight: 1 },
  { word: "your", weight: 1 },
  { word: "all", weight: 1 },
  { word: "jurrasic", weight: 1 },
  { word: "awkward", weight: 1 },
  { word: "unthinkable", weight: 1 },
  { word: "obnoxious", weight: 1 },
  { word: "woke", weight: 1 },
  { word: "scarce", weight: 1 },
  { word: "subtle", weight: 1 },
  { word: "decentralized", weight: 1 },
  { word: "thicc", weight: 1 },
  { word: "fake", weight: 1 },
];

export const truths_alts: WeightedWord[] = [
  { word: "truths", weight: 8 },
  { word: "jokes", weight: 1 },
  { word: "lies", weight: 1 },
  { word: "doubts", weight: 1 },
  { word: "facts", weight: 1 },
  { word: "borders", weight: 1 },
  { word: "eggplants", weight: 1 },
  { word: "peaches", weight: 1 },
  { word: "tokens", weight: 1 },
  { word: "cows", weight: 1 },
  { word: "punks", weight: 1 },
  { word: "emoji", weight: 1 },
  { word: "memes", weight: 1 },
  { word: "trolls", weight: 1 },
  { word: "transactions", weight: 1 },
];

export const hella_alts: WeightedWord[] = [
  { word: "", weight: 15 },
  { word: "hella ", weight: 1 },
  { word: "mad ", weight: 1 },
  { word: "wicked ", weight: 1 },
];

export const evident_alts: WeightedWord[] = [
  { word: "self-evident", weight: 8 },
  { word: "luxurious", weight: 1 },
  { word: "fungible", weight: 1 },
  { word: "erroneous", weight: 1 },
  { word: "problematic", weight: 1 },
  { word: "debatable", weight: 1 },
  { word: "questionable", weight: 1 },
  { word: "despicable", weight: 1 },
  { word: "laughable", weight: 1 },
  { word: "extra", weight: 1 },
  { word: "pleasurable", weight: 1 },
  { word: "lit", weight: 1 },
  { word: "gospel", weight: 1 },
  { word: "despicable", weight: 1 },
  { word: "blasphemous", weight: 1 },
  { word: "insatiable", weight: 1 },
  { word: "sustainable", weight: 1 },
  { word: "paradoxical", weight: 1 },
];

export const punc_alts: WeightedWord[] = [
  { word: ".", weight: 8 },
  { word: "!", weight: 1 },
  { word: "...", weight: 1 },
  { word: " :)", weight: 1 },
  { word: "?", weight: 1 },
];
