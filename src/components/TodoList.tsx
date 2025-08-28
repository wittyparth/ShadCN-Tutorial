import {  useState } from "react"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {format} from "date-fns"
import { Button } from "./ui/button"
import useFetch from "@/hooks/useFetch"
import { ScrollArea } from "./ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"

interface Todo {
    userId : number,
    title : string,
    id : number,
    completed : boolean
}

const TodoList = () => {
    const [date,setDate] = useState<Date | undefined>(new Date())
    const [open,setOpen] = useState(false)
    const [todos]:(Todo[]| never[][]) = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
        <h1 className="text-lg font-medium mb-3">Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className="w-full">
                    {format(date ? date : new Date(),"PPP")}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto">
                <Calendar
                mode="single"
                selected={date}
                onSelect={(val)=>{
                    setDate(val)
                    setOpen(false)
                }}
                className="rounded-lg"
                />
            </PopoverContent>
        </Popover>
        <ScrollArea className="h-[400px] rounded-md p-3">
            <div className="flex flex-col gap-3">
                {
                    todos.map((todo)=>(
                        <Card key={todo?.id} className="flex-row items-center gap-4 p-3">
                                <Checkbox/>
                                <span className="text-muted-foreground">
                                {todo?.title}
                                </span>
                        </Card>
                    ))
                }
                </div>
        </ScrollArea>
    </div>
  )
}

export default TodoList