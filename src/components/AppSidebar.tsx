import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Ellipsis,
  Home,
  Inbox,
  NetworkIcon,
  PlusIcon,
  Search,
  Settings,
  SquareTerminal,
  Trash,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <img
                  src="https://github.com/shadcn.png"
                  alt="CN"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <span>Partha Saradhi</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <PlusIcon /> Add
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash /> Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupAction>
          <SidebarMenu>
            <SidebarMenuItem>
              <Collapsible>
                {/* Trigger -> use asChild so the trigger props are applied to SidebarMenuButton */}
                <CollapsibleTrigger asChild>
                  {/* DO NOT set SidebarMenuButton asChild here */}
                  <SidebarMenuButton>
                    <SquareTerminal />
                    <span className="">Deployments</span>
                    <ChevronDown
                      className={`ml-auto`}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      {/* sub item as a link */}
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/frontend">Frontend</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/backend">Backend</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Collapsible>
                {/* Trigger -> use asChild so the trigger props are applied to SidebarMenuButton */}
                <CollapsibleTrigger asChild>
                  {/* DO NOT set SidebarMenuButton asChild here */}
                  <SidebarMenuButton>
                    <NetworkIcon />
                    <span className="">API Reference</span>
                    <ChevronDown
                      className={`ml-auto transition-transform`}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/frontend">Components</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/backend">Files</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/backend">Conventions</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link to="/deployments/backend">Network</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  Partha Saradhi
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
