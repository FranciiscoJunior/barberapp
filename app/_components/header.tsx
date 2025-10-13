import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "flowbite-react"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="FSW barber" width={120} height={18} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">MENU</SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid py-5">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.
                                0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
                  alt="User Avatar"
                />
              </Avatar>

              <div>
                <p className="font-bold">Francisco Júnior</p>
                <p className="text-xs">franciscojunior@gmail.com</p>
              </div>
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
                  <Image alt={option.title} src={option.imageUrl} height={18} />
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
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
