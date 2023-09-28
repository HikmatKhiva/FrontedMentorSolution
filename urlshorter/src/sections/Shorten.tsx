import { useState } from "react";
import { Link } from "../components";
import { ShortLink } from "../types";
const Shorten = () => {
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [shortenLinks, setShortenLinks] = useState<ShortLink[]>([]);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setUrl(e?.target?.value || '');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
      const data = await response.json()
      if (response.ok) {
        setShortenLinks(prev => [data.result, ...prev]);
        setUrl('')
      }
      setError(!response.ok)
    } catch (e) { console.log(e) }
  };
  return (
    <section id="shorten" className="bg-light py-10 font-poppins">
      <div className="container mx-auto">
        <div className="-translate-y-24">
          <form
            onSubmit={handleSubmit}
            className="bg-dark-violet bg-shorten-mobile md:bg-shorten-desktop bg-no-repeat bg-cover bg-center p-10 rounded-md "
          >
            <div className="flex flex-grow gap-5 flex-wrap">
              <input
                onChange={handleChangeInput}
                value={url}
                className={`flex-grow outline-none border-2 ${error ? "border-red" : "border-transparent"} lg:text-xl p-3 px-5 rounded-md`}
                type="text"
                placeholder="Shorten a link here"
              />
              <button type="submit" className="bg-cyan p-3 px-5 flex-grow md:flex-grow-0 text-white font-bold rounded-md hover:opacity-70 transition-all duration-300">
                Shorten it!
              </button>
            </div>
            <span
              className={` ${error ? "inline-block" : "hidden"
                } mt-3 text-red text-lg italic`}
            >
              {!url.length ? "Please enter a link" : "Please add correct a links"}
            </span>
          </form>
          <div className="">
            {shortenLinks.map((link, index) => (
              <Link key={index} link={link} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shorten;
