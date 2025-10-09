import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () =>  {
    return (
        <Card>
            <CardContent className="flex flex-row justify-between items-center">
                <Image src="/logo.png" alt="FSW barber" width={120} height={18} />
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;