import classes from "./Footer.module.scss";
import { useState } from "react";
import Link from "next/link";
import Banner from "../UI/Banner";
import Image from "next/image";
import logo from "../../../../public/assets/Color logo - no background.svg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentRoute = usePathname();

  const [closeBanner, setCloseBanner] = useState(true);

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const toolsClassname = currentRoute === "/tools" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      {closeBanner && (
        <Banner
          link="/legal/privacy-policy"
          title="This website uses cookies to enhance your browsing experience and provide personalized content. By clicking Accept, you consent to the use of cookies. To learn more about our use of cookies and your options, please read our Cookie Policy."
          setCloseBanner={setCloseBanner}
        />
      )}
      <div className={classes.logo}>
        <Image
          src={logo}
          alt="Arvacay"
          fill
          sizes="(min-width: 1280px) 320px, (min-width: 820px) calc(22.95vw + 31px), 199px"
        />
      </div>
      <div className={classes.nav}>
        <ul>
          <li>
            <Link href="/" className={homeClassname}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className={blogClassname}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/resources" className={toolsClassname}>
              Resources
            </Link>
          </li>
          <li>
            <Link href="/about" className={aboutClassname}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={contactClassname}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.legal}>
        <Link href="/legal/disclaimer">Disclaimer</Link>
        <Link href="/legal">Terms and Conditions</Link>
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
      </div>
      <div className={classes.copyright}>
        <p>{`©${year} By Arvacay`}</p>
      </div>
    </footer>
  );
};

export default Footer;
