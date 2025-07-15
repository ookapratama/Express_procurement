interface ProductInput {
  name: string;
  quantity: number;
  vendorId: number;
}

interface ProductUpdateInput {
  name?: string;
  quantity?: number;
  vendorId?: number;
}