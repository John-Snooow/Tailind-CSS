// Para ver se um usuário está logado ou não .
import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false; // Simulação de carregamento se eu colocar true

const session = {
  user: {
    role: "", 
  }
}

export function Routes() {
  function Route(){
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />;
        
        case "manager":
        return <ManagerRoutes />;
    
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
