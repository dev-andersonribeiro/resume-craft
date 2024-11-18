import { ReactNode } from "react"
import Logo from "@/assets/logo.svg"

type DashboardProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w mx-auto"/>
        </div>
      </aside>

      <main>
        {children}
      </main>
    </div>
  )
}