import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { InputText } from './components/InputText'
import { Text } from './components/Text'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar</Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>
          <InputText.Root>
            <InputText.Icon>
              <Envelope />
            </InputText.Icon>
            <InputText.Content id="email" type="email" placeholder="Digite seu e-mail" />
          </InputText.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <InputText.Root>
            <InputText.Icon>
              <Lock />
            </InputText.Icon>
            <InputText.Content id="password" type="password" placeholder="**********" />
          </InputText.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 hover:cursor-pointer">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha</a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
