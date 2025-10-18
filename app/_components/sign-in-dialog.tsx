import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWidthGoogleClick = () => signIn("google")

  return (
    <>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Faça seu login na plataforma</DialogTitle>

          <DialogDescription>
            Conecte-se com uma conta do Google
          </DialogDescription>
        </DialogHeader>

        <Button
          variant="outline"
          className="gap-1 font-bold"
          onClick={handleLoginWidthGoogleClick}
        >
          <Image
            alt="Faxer login com Google"
            src="/public/google.svg"
            width={18}
            height={18}
          />
          Google
        </Button>
      </DialogContent>
    </>
  )
}

export default SignInDialog
