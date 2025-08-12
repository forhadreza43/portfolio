import React from "react";
import { Button } from "../ui/button";

type PrimaryButtonProps = React.PropsWithChildren<object>;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <Button className="bg-primary rounded-full text-white text-sm shadow-md transition">
      {children}
    </Button>
  );
};

export default PrimaryButton;
