"use client";
import { useEffect } from "react";
import { SearchForm } from "../SearchForm";
import {
  PriceHighLight,
  Table,
  TransactionsTableContainer,
  DeleteIcon,
} from "./styles";
import { useTransactionsStore } from "@/stores/Transactions/useTransactionsStore";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { MobileTable } from "../MobileTable";
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
      {isMobile ? (
        <MobileTable />
      ) : (
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
            })}
          </tbody>
        </Table>
      )}
    </TransactionsTableContainer>
  );
};
