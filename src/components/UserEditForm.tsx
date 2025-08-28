import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import {formSchema, type formSchemaType} from "../zod/userEdit"
import { Button } from "./ui/button";
interface propType {
    data : formSchemaType,
    handleEdit : (x:formSchemaType)=>void
}
const UserEditForm : React.FC<propType> = ({data,handleEdit}) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        ...data
    },
  });

  const handleSubmit = (data:formSchemaType) => {
    handleEdit(data)
    console.log(data)
  }
  return (
    <div className="mt-8">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            // control={form.control}
            name="Username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Your email is kept confidential
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Your Phone number is kept confidential
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="Location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormDescription>
                  Enter your Full address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="Role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select  {...field} >
                    <SelectTrigger>Role</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                    </Select>
                </FormControl>
                <FormDescription>
                  Select your role
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default UserEditForm;
