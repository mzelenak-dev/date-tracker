import { useState } from "react";
// import DateList from './DateList';
import { SelectedDate } from '@/types';
import { DatePicker } from './DatePicker';
import DateVisualizer from './DateVisualizer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DateTracker = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>();
  // const [selectedDateTitle, setSelectedDateTitle] = useState<String>('');
  // const [dateList, setDateList] = useState<SelectedDate[]>([]);

  return (
    <section className='flex flex-row justify-center py-10 px-5'>
      {!selectedDate ? 
         <DatePicker setDateHandler={setSelectedDate} />:
         <DateVisualizer selected={selectedDate} />
      }
      { selectedDate && 
        <div>
          <Input
            required
            type='text'
            className='mt-10'
            placeholder='Enter a name'
          />
          <Button
            type='submit'
            className='mt-2'
          >Save Date</Button>
        </div>
      }
    </section>
  )
}

export default DateTracker