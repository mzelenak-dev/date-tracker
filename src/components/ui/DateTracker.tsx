import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { SelectedDate } from '@/types';
import { DatePicker } from './DatePicker';
import DateVisualizer from './DateVisualizer';
import { Label } from "@/components/ui/label";
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

    setDateList(prevItems => [...prevItems, newDateItem])
  };

  const nameInputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSelectedDateTitle(event.target.value);
    }, 250 );
  }
  
  return (
    <div className="max-w-[720px] m-auto flex flex-col justify-between h-screen">
      <Header />
      <section className='relative p-5 mx-auto'>
        {!selectedDate ? 
          <DatePicker setDateHandler={setSelectedDate} />:
          <DateVisualizer selected={selectedDate} />
        }
        { selectedDate && 
          <div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name">
                <span className="text-red-500 text-lg -mr-1">*</span>Date Name
              </Label>
              <Input
                required
                id="date-name"
                name="date-name"
                type='text'
                className='mt-2 w-md'
                onChange={nameInputChangedHandler}
                placeholder='Enter a name'
              />
            </div>
            <Button
              type='submit'
              className='mt-2 w-md disabled:opacity-75 hover:disabled:cursor-not-allowed'
              onClick={buttonClickedHandler}
              disabled={selectedDateTitle.length < 1}
            >Save Date</Button>
          </div>
        }
      </section>
      <section className="absolute bottom-0 w-full">
        {dateList.length > 0 && <DateListVisualizer dateList={dateList} />}
      </section>
      <Footer />
    </div>
  )
}

export default DateTracker