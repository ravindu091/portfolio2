import { Bell } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'


function Notifications() {
  return (
    <Popover>
        <PopoverTrigger><Bell className='text-slate-500' /></PopoverTrigger>
        <PopoverContent>Mokkakda Baluwe</PopoverContent>
   </Popover>
  )
}

export default Notifications