"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/az logo 4.png";
import prof_img from "@/images/pic-1.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const [error, setError] = useState("");

  const isLoggedin = false;
  const isAdmin = false;
  const router = useRouter();

  const onLogin = async (e: any) => {};

  return (
    <div className="navbar bg-base-100 h-20 shadow-md  ">
      {isLoggedin ? (
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/dashboard"}>Home page</Link>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                {isAdmin && (
                  <li>
                    <Link href={"/sinup"}> New rigister </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link className="btn btn-ghost normal-case text-xl" href="/">
              <Image src={Logo} alt="Logo" className="w-12" />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src={prof_img} alt="User Image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>{/* <a onClick={handleSignOut}>Logout</a> */}</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu text-2xl font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box h-72 flex flex-col justify-center items-center gap-4 w-80"
              >
                <li>
                  <Link  href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/cources"}>Cources</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <Link href={'/'} className="btn btn-ghost normal-case text-xl">
              <Image src={Logo} alt="" className="w-12" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu font-semibold text-lg menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/cources"}>Cources</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn"
              onClick={() => {
                const modal = document.getElementById("my_modal_4");
                if (modal instanceof HTMLDialogElement) {
                  modal.showModal();
                }
              }}
            >
              Login
            </a>
          </div>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-xl flex flex-col items-center justify-center gap-5">
              <h1 className="font-bold text-2xl">Login</h1>
              <form
                // onSubmit={handleSubmit}
                className="modal-body flex flex-col items-center justify-center gap-5"
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      What is your Username or Email?
                    </span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="user.example.com"
                    className="input input-bordered border-solid w-full max-w-xs"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is Password?</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="input input-bordered border-solid w-full max-w-xs"
                    onChange={handleChange}
                  />
                </div>
                {error && (
                  <div className="alert alert-error text-white">{error}</div>
                )}
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="modal-action fixed bottom-2 right-2">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}
