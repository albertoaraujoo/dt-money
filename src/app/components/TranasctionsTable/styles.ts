import { Trash } from "phosphor-react";
import styled from "styled-components";

export const TransactionsTableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  min-width: fit-content;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme["gray-300"]};

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

type PriceHighLightProps = {
  variant: "income" | "outcome";
};

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const DeleteIcon = styled(Trash)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["red-300"]};
  }
`;
