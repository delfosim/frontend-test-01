import * as React from "react";
import { ModalContext } from "./index";

export const ModalStore: React.FC = ({ children }) => {
  const [openCreate, setOpenCreate] = React.useState<boolean>(false);
  const [openUpdate, setOpenUpdate] = React.useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        openCreate,
        setOpenCreate,
        openUpdate,

        setOpenUpdate,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
