import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import {
  PriceHighLight,
  CategoryAndDate,
  DeleteIcon,
  DescAndPriceAndDelete,
  DescAndPrice,
  MobileCardContainer,
} from "./styles";
import { Calendar, TagSimple } from "phosphor-react";
import {
  Transaction,
  useTransactionsStore,
} from "@/stores/Transactions/useTransactionsStore";

export const MobileTransactionCard = ({
  id,
  description,
  price,
  category,
  type,
  createdAt,
}: Transaction) => {
  const deleTransaction = useTransactionsStore(
    (state) => state.deleteTransaction
  );

  return (
    <MobileCardContainer key={id}>
      <DescAndPriceAndDelete>
        <DescAndPrice>
          <td>{capitalizeFirstLetter(description)}</td>
          <td>
            {" "}
            <PriceHighLight variant={type}>
              {type === "outcome" && "- "}
              {priceFormatter.format(price)}
            </PriceHighLight>
          </td>
        </DescAndPrice>
        <td>
          {" "}
          <DeleteIcon onClick={() => deleTransaction(id)} size={30} />
        </td>
      </DescAndPriceAndDelete>

      <CategoryAndDate>
        <td>
          <TagSimple /> {capitalizeFirstLetter(category)}
        </td>
        <td>
          <Calendar />
          {dateFormatter.format(new Date(createdAt))}
        </td>
      </CategoryAndDate>
    </MobileCardContainer>
  );
};
