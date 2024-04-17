import { Trash } from "phosphor-react";
import styled from "styled-components";

export const MobileCardContainer = styled.tr`
  td {
    padding: 0;
  }
`;

export const DescAndPriceAndDelete = styled.td`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  td {
    padding: 0.5rem 0.5rem;
  }
`;

export const DescAndPrice = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5rem;
`;

export const CategoryAndDate = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  td {
    color: ${(props) => props.theme["gray-500"]};
    font-size: 1.3rem;
    padding: 1rem 1rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    line-height: 0;
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
