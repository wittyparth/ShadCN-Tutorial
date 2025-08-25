import type React from "react"
import type { ReactNode } from "react"
import Header from "./Header"
import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "./ui/sidebar"

interface PropType {
    children : ReactNode
}

const layout: React.FC<PropType> = ({children}) => {
  return (
    <div className="h-screen flex">
      <SidebarProvider>
        <AppSidebar/>
        <div className="h-screen w-full">
            <Header/>
            {children}
        </div>
        </SidebarProvider>
    </div>
  )
}

export default layout