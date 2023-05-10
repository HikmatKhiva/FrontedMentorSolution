import { Navbar, Card } from "./components/index";
import icon from "./assets/icon-arrow.svg";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { calculateAge } from "./features/ageSlice";
function App() {
  const age = useAppSelector((state) => state.age);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(calculateAge());
  return (
    <div className="bg-off-white h-screen flex justify-center items-center">
      <div className="bg-white p-5 pr-10 rounded-br-[50px] rounded-md w-[90%] md:w-[500px]">
        <Navbar />
        <main>
          <div className="md:my-5 my-7 relative flex items-center">
            <div className="h-[2px] rounded w-full bg-light-gray"></div>
            <button
              onClick={handleClick}
              className="hover:bg-black transition duration-300 bg-purple md:w-[60px] md:h-[60px] w-[40px] h-[40px] absolute left-1/2 md:left-[100%] -translate-x-1/2  text-white md:p-4 p-2 rounded-full"
            >
              <img src={icon} alt="icon" />
            </button>
          </div>
          <Card number={age.error ? 0 : age.currentYear} title="years" />
          <Card number={age.error ? 0 : age.currentMonth} title="months" />
          <Card number={age.error ? 0 : age.currentDay} title="days" />
        </main>
      </div>
    </div>
  );
}
export default App;
