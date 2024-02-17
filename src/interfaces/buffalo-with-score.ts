export interface BuffaloWithScore {
  totalScore: number;
  type: {
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
  };
  Score: {
    id: number;
    buffaloId: number;
    competitionId: number;
    body: number;
    head: number;
    neck: number;
    horn: number;
    back: number;
    commiteeId: number;
  }[];
  id: number;
  microchip: string;
  name: string;
  typeId: number;
}
