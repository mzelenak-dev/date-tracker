import React from 'react'

const DateList = ({ dateList, onDateClicked }) => {
  const DateListItem = (date) => {
    return (
      <div
        className='flex flex-row justify-between'
        onClick={onDateClicked}
      >
        <p>{date.title}</p>
        <p>{date.when}</p>
        <p>{date.elapsed}</p>
      </div>
    )
  };

  const dateListItems = dateList.map((date) => (
    <DateListItem date={date} />
  ));

  return (
    {dateListItems}
  )
}

export default DateList