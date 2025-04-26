import { formatDistanceToNow } from "date-fns";
import { DateVisualizerProps } from "@/types";

const DateVisualizer: React.FC<DateVisualizerProps> = ({ selected }) => {
  return (
    <section className='flex flex-col text-center'>
      <h1 className='text-5xl'>{ formatDistanceToNow(selected.toDateString()) }</h1>
      <p>since</p>
      <h4 className='text-3xl'>{selected.toDateString()}</h4>
    </section>
  )
}

export default DateVisualizer