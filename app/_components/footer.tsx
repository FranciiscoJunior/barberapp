import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      {/*Footer*/}
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-500">
            Desenvolvido por Francisco Júnior -{" "}
            <span className="font-semibold">FSW Barber &copy; 2025</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
