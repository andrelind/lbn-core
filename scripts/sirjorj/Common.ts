export interface Action {
  difficulty: string;
  type: string;
  linked: Linked;
}

export interface Availability {
  name: string;
  sku: string;
}

export interface Charge {
  capacity: number;
  rechargeable: number;
}

export interface Force {
  capacity: number;
  rechargeable: number;
}

export interface Linked {
  difficulty: string;
  type: string;
}
