import { createContext, useMemo, useState } from "react";

export const initialState = { tema: "light", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const contextValue = useMemo(() => {
    return {
      state,
      actualizarTema: () => {
        const nuevoTema = state.tema === "light" ? "dark" : "light";
        setState((prevState) => ({ ...prevState, tema: nuevoTema }));
      },
      actualizarData: (nuevosDatos) => {
        setState((prevState) => ({ ...prevState, data: nuevosDatos }));
      },
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
