// Para ver se um usuário está logado ou não .
import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false; // Simulação de carregamento se eu colocar true, aparece o loading

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
