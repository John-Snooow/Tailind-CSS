// Para ver se um usuário está logado ou não .
import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
