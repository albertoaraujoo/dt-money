import { useEffect } from "react";
import { useTransactionsStore } from "@/stores/Transactions/useTransactionsStore";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import {
  PriceHighLight,
  Table,
  CategoryAndDate,
  DeleteIcon,
  DescAndPriceAndDelete,
  DescAndPrice,
} from "./styles";
import { Calendar, TagSimple } from "phosphor-react";

export const MobileTable = () => {
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
    <Table>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <DescAndPriceAndDelete>
                <DescAndPrice>
                  <td>{capitalizeFirstLetter(transaction.description)}</td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </DescAndPrice>
                <DeleteIcon
                  onClick={() => deleteTransaction(transaction.id)}
                  size={30}
                />
              </DescAndPriceAndDelete>

              <CategoryAndDate>
                <td>
                  <TagSimple /> {capitalizeFirstLetter(transaction.category)}
                </td>
                <td>
                  <Calendar />
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </td>
              </CategoryAndDate>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
