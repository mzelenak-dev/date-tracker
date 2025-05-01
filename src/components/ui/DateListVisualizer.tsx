import { differenceInDays } from "date-fns";

const DateListVisualizer = ({dateList}) => {
  // console.log(dateList)
  const dateItems = dateList.map(item => (
    <div key={item.id} className='flex flex-row justify-evenly hover:cursor-pointer border-white border-1 p-5 mb-3 rounded-md'>
      <p>{item.title}</p>
      <p>was</p>
      <p>{ differenceInDays(new Date(), item.date.toString()) }</p>
      <p>days ago</p>
    </div>
  ))
  return (
    <div className="px-3">
      <p className="text-xl mb-2">Existing Dates:</p>
      <section className="flex flex-col max-h-[350px] overflow-y-scroll px-2 border-t-1 border-gray">
        {dateItems}
      </section>
    </div>
  )
}

export default DateListVisualizer