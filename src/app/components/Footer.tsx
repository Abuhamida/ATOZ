"use client";
import { Typography, Input } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/az logo 4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const LINKS = [
  {
    title: "Company",
    items: [
      {
        Home: [{ name: "Home", link: "/" }],
        About: [{ name: "About", link: "/about" }],
        Courses: [{ name: "Cources", link: "/cources" }],
        Contact: [{ name: "Contact", link: "/contact" }],
      },
    ],
  },
  {
    title: "Useful Links",
    items: [
      {
        help: [{ name: "help Center", link: "/help-center" }],
        Ask: [{ name: "Ask Question", link: "/ask-question" }],
        Academic: [{ name: "Academic A to Z ", link: "/academic-a-to-z" }],
        Policy: [{ name: "Private Policy", link: "/private-policy" }],
      },
    ],
  },

  //   {
  //     title: "Resource",
  //     items: ["Blog", "Newsletter", "Events", "Help center"],
  //   },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <Image src={Logo} className="w-10" alt="" />
          <p>
            Teaching Programming and<br></br> Artificial Intelligence to
            Children.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Cources</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title">Useful Links</header>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Ask Question</a>
          <a className="link link-hover">Acdemic Ato Z</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <form className=" max-w-min">
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control flex-wrap  w-56">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full lg:w-full pr-16"
              />
              <button className="btn btn-primary lg:absolute rounded-md lg:rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
          <p>Copyright © {year} - All right reserved by AtoZ Academic</p>
        </aside>
      </footer>
    </>
  );
}
