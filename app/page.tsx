import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "flowbite-react"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import BarbershopItem from "./_components/barbershoping-item"
import { db } from "./_lib/prisma"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

//SERVER COMPONENTS
const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Francisco Júnior!</h2>
        <p>Segunda-Feira, 06 de Outubro.</p>

        {/*BUSCA*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquisar serviços ou profissionais..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/*BUSCA RÁPIDA*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image src={option.imageUrl} width={16} height={16} alt={option.title}/>
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 w-full h-[150px]">
          <Image alt="Agende nos melhores com FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl" />
        </div>

        {/*AGENDAMENTOS*/}

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Populares</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

      </div>

      {/*Footer*/}
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-500">Desenvolvido por Francisco Júnior - <span className="font-semibold">FSW Barber &copy; 2025</span></p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home