import { useState } from "react";
// import DateList from './DateList';
import { SelectedDate } from '@/types';
import { DatePicker } from './DatePicker';
import DateVisualizer from './DateVisualizer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DateListVisualizer from "./DateListVisualizer";

const DateTracker = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>();
  const [selectedDateTitle, setSelectedDateTitle] = useState<String>('');
  const [dateList, setDateList] = useState<SelectedDate[]>([]);

  const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
  
  const buttonClickedHandler = () => {
    const newDateItem = {
      date: selectedDate,
      id: randomSixDigitNumber,
      title: selectedDateTitle || undefined,
    };

    setDateList((prevItems: SelectedDate[]) => { return [...prevItems, newDateItem] })
  };

  const nameInputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSelectedDateTitle(event.target.value);
    }, 250 );
  }
  
  return (
    <div className="relative h-screen">
      <section className='flex flex-col p-5'>
        {!selectedDate ? 
          <DatePicker setDateHandler={setSelectedDate} />:
          <DateVisualizer selected={selectedDate} />
        }
        { selectedDate && 
          <div className="flex flex-col m-auto">
            <Input
              required
              type='text'
              className='mt-10 w-md'
              onChange={nameInputChangedHandler}
              placeholder='Enter a name (optional)'
            />
            <Button
              type='submit'
              className='mt-2 w-md'
              onClick={buttonClickedHandler}
            >{selectedDateTitle ? 'Update Name' : 'Save Date'}</Button>
          </div>
        }
      </section>
      <section className="absolute bottom-0 w-full">
        {dateList.length > 0 && <DateListVisualizer dateList={dateList} />}
      </section>
    </div>
  )
}

export default DateTracker