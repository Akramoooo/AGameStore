export interface Game {
  id: number;
  name: string;
  price: number;
  company: string;
  desc?: string;
  preview?: string;
  tags?: Array<string>;
}
