import type { ReactNode } from "react";

interface Props {
  //set children as the variable name to allow to set value as children of parent component
  children: ReactNode;
}

//use destructurate form to avoid to prefix each variable calls
function Alert({ children }: Props) {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
}

export default Alert;
