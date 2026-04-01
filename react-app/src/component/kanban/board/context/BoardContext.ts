import { createContext, useContext, type Dispatch } from "react";
import type { Action, Task } from "../../shared/model/Types";

interface BoardContextType {
  tasks: Task[];
 dispatch: Dispatch<Action>;
}

export const BoardContext = createContext<BoardContextType | null>(null);

// Utility hook — avoid to check null everywhere
export function useBoardContext() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error("useBoardContext mustbe used in BoardProvider");
  return ctx;
}
