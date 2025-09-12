import { useActionState } from "react";
import { z, ZodError }   from "zod";

import { Input } from "../components/input";
import { Button } from "../components/Button";

const signInSchema = z.object({
  email: z.email({message: "E-mail inválido"}),
  password: z.string().trim().min(1, {message: "Informe a senha"}),
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  async function signIn(_: any, formData: FormData) {
    try{
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      console.log(data)
    }catch(error){
      console.log(error)

      if(error instanceof ZodError){
        return { massage:error.issues[0].message}
      }
      return { message: "Erro ao fazer login, tente novamente mais tarde."}
    }
  }
  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="Digite sua senha"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.massage}
      </p>

      <Button type="submit" isloading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm fonf-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
