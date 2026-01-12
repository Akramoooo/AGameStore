export interface Game {
  id: number;
  name: string;
  price: number;
  company: Company;
  desc?: string;
  preview?: string;
  tags?: string[];
  images?: string[];
}

export interface GameCardProps {
  game: Game;
}

export interface Company {
  id: string;
  name: string;
  site?: string;
}
