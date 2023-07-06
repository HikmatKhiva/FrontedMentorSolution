import useFetch from "./hooks/useFetch";
import { Loading, Card, Error } from "./components";
import { iconDice, patternDivider, frontedMentorIo, github } from "./assets";
function App() {
  const { data, error, loading, reloadData } = useFetch(import.meta.env.VITE_API_URL);
  return (
    <main className="bg-dark-blue h-screen grid place-items-center font-base relative">
      <div className="md:w-[540px] flex flex-col w-[90%] relative bg-dark-grayish-blue text-center py-12 lg:px-12 p-10 rounded-lg">
        {loading ? <Loading /> : error ? <Error error={error} /> : <Card data={data} />}
        <img src={patternDivider} alt="icon-dice" />
        <button disabled={loading} onClick={() => reloadData()} className="bg-light-green w-14 h-14 lg:w-16 lg:h-16 absolute rounded-full grid place-items-center left-1/2 -translate-x-1/2 -bottom-8 hover:shadow-btn transition-all duration-300">
          <img src={iconDice} alt="icon-dice" />
        </button>
      </div>
      <div className="attribution absolute bottom-10 flex gap-2">
        <a className="w-6 h-6 hover:scale-110 transition-all duration-300" href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db" target="_blank">
          <img className="w-full h-full rounded-full" src={frontedMentorIo} alt="frontedMentorIo" />
        </a>
        <a href="" target="_blank" className="w-6 h-6 hover:scale-110 transition-all duration-300">
          <img src={github} alt="github" className="w-full h-full rounded-full" />
        </a>
      </div>
    </main>
  );
}
export default App;