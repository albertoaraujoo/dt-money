"use client";
import { useEffect } from "react";
import { SearchForm } from "../SearchForm";
import { PriceHighLight, Table, TransactionsTableContainer } from "./styles";
import { useTransactionsStore } from "@/stores/Transactions/useTransactionsStore";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export const TranasctionsTable = () => {
  const fetchTransactions = useTransactionsStore(
    (state) => state.fetchTransactions
  );

  const transactions = useTransactionsStore((state) => state.transactions);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  console.log(transactions);

  return (
    <TransactionsTableContainer>
      <SearchForm />
      <Table>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="40%">
                  {capitalizeFirstLetter(transaction.description)}
                </td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{capitalizeFirstLetter(transaction.category)}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TransactionsTableContainer>
  );
};
