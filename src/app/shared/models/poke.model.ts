
export interface PokeResult {
  next?: string;
  previous?: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  icon: string;
}

export interface PokeDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokeType[];
  sprites: PokeCardImg;
}

export interface PokeType {
  type: {
    name: string;
  };
}

export interface PokeCardImg {
  front_default: string;
}

