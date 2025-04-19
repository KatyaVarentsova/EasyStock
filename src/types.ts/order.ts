export interface Order {
  id: string;
  requestedBy: string;
  products: OrderItem[];
  createdAt: string;
  totalAmount: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
}
