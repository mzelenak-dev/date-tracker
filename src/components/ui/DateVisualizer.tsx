import { formatDistanceToNow } from "date-fns";
import { DateVisualizerProps } from "@/types";

const DateVisualizer: React.FC<DateVisualizerProps> = ({ selected }) => {
  return (
    <section className='flex flex-col text-center'>
      <p className='text-3xl'>{selected.toDateString()}</p>
      <p className='text-2xl'> was { formatDistanceToNow(selected.toDateString()) } days ago</p>
    </section>
  )
}

export default DateVisualizer