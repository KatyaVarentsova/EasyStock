export interface Supply {
  id: string;
  supplierName: string;
  products: SupplyItem[];
  createdAt: string;
  receivedBy: string;
}

export interface SupplyItem {
  productId: string;
  quantity: number;
}
