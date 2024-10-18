import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container max-w-[1356px] mx-auto md:px-7 px-4">
      {children}
    </div>
  );
};
