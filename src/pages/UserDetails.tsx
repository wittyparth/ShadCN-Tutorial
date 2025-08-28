import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AppLayout from "../components/AppLayout";
import { useParams } from "react-router-dom";
import CardList from "@/components/CardList";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import UserEditForm from "@/components/userEditForm";
import type { formSchemaType } from "@/zod/userEdit";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const UserDetails = () => { 
  const { id } = useParams();
  const [formData,setFormData] = useState<formSchemaType>({
    "Username" : "Partha Saradhi",
    "Email" : "parthasaradhimunakala@gmail.com",
    "Phone" : "+91 123 456 7",
    "Role" : "Admin",
    "Location" : "Banglore, India"
  })
  return (
    <AppLayout>
      <div className="">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/users">
              <BreadcrumbItem>User</BreadcrumbItem>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href={`/users/${id}`}>
              <BreadcrumbItem className="text-white">{id}</BreadcrumbItem>
            </BreadcrumbLink>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col lg:flex-row gap-4 my-3">
          <div className="flex flex-col gap-4 lg:w-1/3">
          {/* User Badges */}
            <div className="bg-primary-foreground rounded-md p-4 ">
              <h1 className="font-medium text-lg mb-4">User Badges</h1>
              <div className="flex gap-4">
                <HoverCard>
                  <HoverCardTrigger>
                    <BadgeCheck
                      size={36}
                      className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Verified User</h1>
                    <p className="text-sm text-muted-foreground">
                      This user has been verified by the admin.
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
              </div>
            </div>
            {/* User Information */}
            <div className="bg-primary-foreground rounded-md p-4 ">
                <div className="flex items-center justify-between">
                <h1 className="font-medium text-lg">User Information</h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>Edit User</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit User Details</SheetTitle>
                        <UserEditForm data={formData} handleEdit={setFormData}/>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <Progress value={70}/>
                    <p>Username : {formData.Username}</p>
                    <p>Email : {formData.Email}</p>
                    <p>Phone : {formData.Phone}</p>
                    <p>Location : {formData.Location}</p>
                    <p>Role: <Badge>{formData.Role}</Badge></p>
                </div>
                <p className="text-muted-foreground text-sm my-4 mb-0">Joined on 12-08-2025</p>
            </div>
            <div className="bg-primary-foreground rounded-md p-4">
              <CardList title="Recent Transactions" />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-2/3 p-2">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold mb-3">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
          </div>
        </div>
    </AppLayout>
  );
};

export default UserDetails;
