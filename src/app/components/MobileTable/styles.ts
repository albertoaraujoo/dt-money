import { Trash } from "phosphor-react";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme["gray-300"]};

  td {
    font-size: 1.5rem;
    background: ${(props) => props.theme["gray-700"]};
    gap: 1rem;
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

export const DescAndPriceAndDelete = styled.td`
  width: 100%;
  height: 8rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescAndPrice = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CategoryAndDate = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  td {
    color: ${(props) => props.theme["gray-500"]};
    padding: 1.25rem 2rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
`;

type PriceHighLightProps = {
  variant: "income" | "outcome";
};

export const PriceHighLight = styled.span<PriceHighLightProps>`
  font-weight: bold;
  font-size: 1.5rem;
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
