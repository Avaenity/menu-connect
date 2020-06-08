import Link from 'next/link'
import Burger from './Burger'


export default function Nav({ open, setOpen }) {

  return (
    <nav>
      <Burger open={open} setOpen={setOpen}/>
    </nav>
  )
}
