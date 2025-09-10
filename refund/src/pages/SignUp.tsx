

import { useState } from "react"
import { z, ZodError } from "zod"

import { Input } from "../components/input"

import { Button } from "../components/Button"

const signUpSchema = z.object({
    name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
    email: z.string().email({ message: "E-mail inválido" }),
    password: z
        .string()
        .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    passwordConfirm: z.string({message:"Confirme a senha"}),
})
.refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
})

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        try{
            setIsLoading(true)

            const data = signUpSchema.parse({
                name,
                email,
                password,
                passwordConfirm,
            })

        }catch(error){
            if ( error instanceof ZodError){
                return alert(error.issues[0].message)
            }

            alert(" Não foi possível cadastrar!")
        }finally{
            setIsLoading(false)
        }
    }
    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
        <Input
            required
            legend="Name"
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
        />

        <Input
            required
            legend="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
        />

        <Input
            required
            legend="Senha"
            type="password"
            placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}

        />

        <Input
            required
            legend="Confirmação da Senha"
            type="password"
            placeholder="123456"
            onChange={(e) => setPasswordConfirm(e.target.value)}

        />

            <Button type="submit" isloading={isLoading}>
                Cadastrar
            </Button>

            <a 
            href="/" className="text-sm fonf-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
            >
                Já tenho uma conta
            </a>
    </form>
}