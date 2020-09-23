import { Ability } from './ability';
import { Attack } from './attack';
import { Resistance } from './resistance';
import { Weakness } from './weakness';

export interface Cards {
  cards: [];
}

export interface Card extends Cards {
  ability: Ability;
  artist: string;
  attacks: Attack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  hp: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber: number;
  number: string;
  rarity: string;
  resistances: Resistance[];
  retreatCost: string[];
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  text: string[];
  types: string[];
  weaknesses: Weakness[];
}
