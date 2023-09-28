import FooterList from "./FooterList";
import Social from "./Social";
import { logo } from "../assets";
import { WebSvg } from "../components/AnimationSvg";
import {
  companyLink,
  featuresLink,
  resourcesLink,
  socialLinks,
} from "../config";
const Footer = () => {
  return (
    <footer className="bg-very-dark-violet py-10">
      <div className="container mx-auto flex justify-center sm:justify-between flex-wrap gap-5 items-start">
        <img className="lighted" src={logo} alt="footer-logo" />
        <div className="flex flex-wrap gap-10">
          <FooterList links={featuresLink} />
          <FooterList links={resourcesLink} />
          <FooterList links={companyLink} />
          <div className="flex gap-5 flex-grow justify-center">
            {socialLinks.map((social, index) => (
              <Social key={social.id} social={social} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        <a
          href="https://hikmatbek.uz"
          rel="noopener noreferrer"
          target="_blank"
          className="border-r-2 pr-2 border-white"
          aria-label="portfolio web site link"
        >
          <WebSvg />
        </a>
        <a
          href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub"
          rel="noopener noreferrer"
          target="_blank"
          className="pl-2"
          aria-label="Frontend Mentor web site link"
        >
          <img className="w-7" src="/favicon-32x32.png" alt="FrontEnd mentor io logo" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
