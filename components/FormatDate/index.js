import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import { es } from 'date-fns/locale/es'
const my_date = '08-18-2021'
export default function FormatDate() {
  const [date, setDate] = useState('')
  const date1 = format(new Date(my_date), 'eeee - MMMM dd, yyyy')

  return <div>{date}</div>
}
