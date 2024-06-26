import { useTransactionsStore } from "@/stores/Transactions/useTransactionsStore";

export const useSummary = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
};
