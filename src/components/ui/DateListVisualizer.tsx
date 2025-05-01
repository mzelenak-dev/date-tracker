const DateListVisualizer = ({dateList}) => {
  // console.log(dateList)
  const dateItems = dateList.map((item, index) => (
    <div key={item.id} className={`flex flex-row justify-between border-white border-1 p-5 ${index !== dateList.length - 1 ? 'mb-4' : ''}`}>
      <p>{item.title || 'no name given'}</p>
      <p>{item.date.toString()}</p>
    </div>
  ))
  return (
    <section className="flex flex-col">
      {dateItems}
    </section>
  )
}

export default DateListVisualizer