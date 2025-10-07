import { Button } from "flowbite-react"
import { SearchIcon } from "lucide-react"
import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import Image from "next/image"

//SERVER COMPONENTS
const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Francisco Júnior!</h2>
        <p>Segunda-Feira, 06 de Outubro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquisar serviços ou profissionais" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 w-full h-[150px]">
          <Image alt="Agende nos melhores com FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default Home