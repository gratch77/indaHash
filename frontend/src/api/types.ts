export interface CardType {
  id: number;
  name: string;
  collection: string;
  receivedDate: string;
  imageUrl: string;
  forSale: boolean;
  forTrade: boolean;
  likes: number;
  ranking: number;
  influencerName: string;
}

export interface FetchParams {
  page?: number;
  limit?: number;
  sortField?: string;
  sortOrder?: string;
}
