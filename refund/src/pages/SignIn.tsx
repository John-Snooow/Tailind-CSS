
import { useState } from "react"
import { Input } from "../components/input"
import { Button } from "../components/Button"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(email, password)
    }
    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
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
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}

        />

            <Button type="submit" isloading={isLoading}>
                Entrar
            </Button>

            <a 
            href="/signup" className="text-sm fonf-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
            >
                Criar conta
            </a>
    </form>
}