"use client";
import { useEffect } from "react";
import { SearchForm } from "../SearchForm";
import {
  PriceHighLight,
  Table,
  TransactionsTableContainer,
  DeleteIcon,
} from "./styles";
import {
  Transaction,
  useTransactionsStore,
} from "@/stores/Transactions/useTransactionsStore";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { MobileTransactionCard } from "../MobileTransactionCard";
import { useIsMobile } from "@/hooks/useIsMobile";

export const TranasctionsTable = () => {
  const isMobile = useIsMobile();

  const fetchTransactions = useTransactionsStore(
    (state) => state.fetchTransactions
  );

  const deleteTransaction = useTransactionsStore(
    (state) => state.deleteTransaction
  );

  const transactions = useTransactionsStore((state) => state.transactions);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsTableContainer>
      <SearchForm />

      <Table>
        <tbody>
          {!isMobile
            ? transactions.map((transaction) => {
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
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                    <td>
                      <DeleteIcon
                        onClick={() => deleteTransaction(transaction.id)}
                        size={20}
                      />
                    </td>
                  </tr>
                );
              })
            : transactions.map((transaction) => {
                return (
                  <MobileTransactionCard
                    key={transaction.id}
                    id={transaction.id}
                    description={transaction.description}
                    price={transaction.price}
                    type={transaction.type}
                    category={transaction.category}
                    createdAt={transaction.createdAt}
                  />
                );
              })}
        </tbody>
      </Table>
    </TransactionsTableContainer>
  );
};
