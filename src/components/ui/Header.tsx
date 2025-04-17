import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className='border-b p-3'>
      <div className='flex flex-row justify-between items-center max-w-[720px] m-auto'>
        <h1 className='text-xl'>Date Tracker App</h1>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header