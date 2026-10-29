
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"
import { FaDiscord } from "react-icons/fa6"
import { FaTelegramPlane} from "react-icons/fa"

const Navigation = () => {
  const { scrolled } = useScrolled({ initial: false })

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={cn(
          "top-0 z-50 flex h-14 rounded-md md:h-16",
          // "sticky top-0 z-50 flex h-14 rounded-md max-md:border-b max-md:bg-bg md:h-16",
          scrolled && "pointer-events-none"
        )}
      >
        <div className="container flex h-full max-w-screen-2xl 2xl:max-w-none mx-16 items-center">
          {/* Desktop Nav */}
          <div className="hidden w-full items-center justify-between md:flex">
            <div className="w-[130px]">
              <a
                href="/"
                className={cn(
                  "outline-none ring-0 ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-2",
                  "flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
                  scrolled && "pointer-events-none -translate-x-2 opacity-0"
                )}
                aria-hidden={scrolled}
              >
                <Avatar className="size-6 rounded-sm">
                  <AvatarImage src="/altera_dark.png" alt="AlteraSMS brand logo" />
                  <AvatarFallback>SMS</AvatarFallback>
                </Avatar>
                <div className="font-josephin font-semibold leading-normal tracking-tighter">
                  AlteraSMS
                </div>
                <Badge size="sm" variant="neutral" className="border">
                  v3
                </Badge>
              </a>
            </div>
            <div
              className={cn(
                "flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "pointer-events-none translate-x-2 opacity-0"
              )}
              aria-hidden={scrolled}
              tabIndex={scrolled ? -1 : undefined}
            >
              <span className={buttonVariants({ variant: "ghost", size: "icon" })}>
                <FaDiscord className="size-5" />
              </span>
              <span className={buttonVariants({ variant: "ghost", size: "icon" })}>
                <FaTelegramPlane className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navigation
