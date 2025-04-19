export interface Supply {
  id: string;
  supplier: string;
  products: SupplyItem[];
  createdAt: string;
  receivedBy: string;
}

export interface SupplyItem {
  productId: string;
  quantity: number;
}
