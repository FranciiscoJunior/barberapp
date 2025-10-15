import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SidebarButton = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">MENU</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between border-b border-solid py-5">
        <h2 className="font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça seu login da plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se com sua conta do Google.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>

          <Button variant="outline" className="gap-1 font-bold">
            <Image
              src="/public/google.svg"
              width={18}
              height={18}
              alt="login com as contas google"
            />
            Google
          </Button>
        </Dialog>

        {/* <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.
              0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
            alt="User Avatar"
          />
        </Avatar>

        <div>
          <p className="font-bold">Francisco Júnior</p>
          <p className="text-xs">franciscojunior@gmail.com</p>
        </div>*/}
      </div>

      <div className="flex flex-col gap-2 border-6 border-b py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost">
            <Link href="/">
              <HomeIcon size={18} /> Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} /> Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-6 border-b py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start" gap-2>
          {" "}
          <LogOutIcon size={18} /> Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarButton
