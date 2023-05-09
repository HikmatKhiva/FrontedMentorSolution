import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hook"
import { dayChange, monthChange, yearChange, calculateAge } from "../features/ageSlice"
const Navbar = () => {
  const age = useAppSelector(state => state.age)
  const dispatch = useAppDispatch()
  const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(dayChange(Number(e.target.value)))
  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(monthChange(Number(e.target.value)))
  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(yearChange(Number(e.target.value)))
  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && dispatch(calculateAge())
  return (
    <nav>
      <div className="flex gap-5">
        <div className="w-[25%]">
          <p className={`${age.day === 0 && age.error && 'text-red-500'}`}>DAY</p>
          <input
            className={`border w-full md:text-2xl focus:border-purple p-2 outline-none rounded-lg ${age.day === 0 && age.error && 'border-red-500'}`}
            onChange={handleDay}
            onKeyUp={handlePress}
            name="day"
            value={age.day ? age.day : ''}
            type="text" placeholder="DD" />
          {age.day === 0 && age.error && <p className={`text-xs truncate ${age.day === 0 && age.error && 'text-red-500 '}`}>
            Mustn't be empty
          </p>}
        </div>
        <div className="w-[25%]">
          <p className={`${age.month === 0 && age.error && 'text-red-500'}`}>MONTH</p>
          <input
            className={`border w-full md:text-2xl focus:border-purple p-2 outline-none rounded-lg ${age.month === 0 && age.error && 'border-red-500'}`}
            value={age.month ? age.month : ''}
            onChange={handleMonth}
            onKeyUp={handlePress}
            name="month"
            type="text" placeholder="MM" />
          {age.month === 0 && age.error && <p className={`text-xs truncate ${age.month === 0 && age.error && 'text-red-500 '}`}>
            Mustn't be empty
          </p>}
        </div>
        <div className="w-[25%]">
          <p className={`${age.year === 0 && age.error && 'text-red-500'}`}>YEAR</p>
          <input
            className={`border w-full md:text-2xl focus:border-purple p-2 outline-none rounded-lg ${age.year === 0 && age.error && 'border-red-500'}`}
            onChange={handleYear}
            onKeyUp={handlePress}
            value={age?.year ? age.year : ''}
            name="year"
            type="text" placeholder="YYYY" />
          {age.year === 0 && age.error && <p className={`text-xs truncate ${age.year === 0 && age.error && 'text-red-500 '}`}>
            Mustn't be empty
          </p>}
        </div>
      </div>
    </nav>
  )
}
export default Navbar