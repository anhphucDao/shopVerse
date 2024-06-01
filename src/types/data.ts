interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface userAccount {
  email: string;
  password: string;
}

export type {Product, userAccount};
