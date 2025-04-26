import { cn } from "@/lib/utils"
import { DatePickerProps } from "@/types";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DatePicker({setDateHandler}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn('w-[280px] justify-start text-left font-normal text-muted-foreground')}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Pick a date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          onSelect={setDateHandler}
        />
      </PopoverContent>
    </Popover>
  )
}
