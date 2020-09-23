import { Card } from './pokemon/card';

export interface Deck {
  name: string;
  type: string;
  card: Card[];
}
