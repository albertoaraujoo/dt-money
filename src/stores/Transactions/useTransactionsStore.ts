import { api } from "@/lib/axios";
import { create } from "zustand";

type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type CreateTransaction = Omit<Transaction, "id" | "createdAt">;

type State = {
  transactions: Transaction[];
  fetchTransactions: () => Promise<void>;
  createTransaction: (data: CreateTransaction) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
};

export const useTransactionsStore = create<State>((set) => ({
  transactions: [],

  fetchTransactions: async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    set({ transactions: response.data });
  },

  createTransaction: async (data: CreateTransaction) => {
    const { description, price, category, type } = data;
    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date().toISOString(),
    });

    set((state) => ({
      transactions: [response.data, ...state.transactions],
    }));
  },

  deleteTransaction: async (id: number) => {
    await api.delete(`transactions/${id}`);
    set((state) => ({
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
  },
}));
