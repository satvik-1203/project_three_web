"use client";

import React from "react";
import Input from "../../components/Input";
import { login } from "./login";
import Link from "next/link";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="">
      <nav className=" z-10 my-8 flex justify-end space-x-4">
        <Link href={"/signup"}>
          <div className="px-4 py-2 rounded shadow hover:shadow-lg cursor-pointer">
            Sign up
          </div>
        </Link>
        <Link href={"/login"}>
          <div className="px-4 py-2 rounded shadow hover:shadow-lg cursor-pointer">
            Login
          </div>
        </Link>
      </nav>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          login(
            formData.get("username") as string,
            formData.get("password") as string
          );
        }}
        className="px-8 py-4 my-16 rounded shadow-lg flex flex-col space-y-6"
      >
        <div className="my-8">
          <h2 className="text-3xl font-semibold">Login</h2>
        </div>
        <Input name="username" placeholder="Enter your username" />
        <Input
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-base px-4 py-2 rounded border-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
