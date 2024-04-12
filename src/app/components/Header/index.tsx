import { useState } from "react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        DT-MONEY
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setOpen={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
