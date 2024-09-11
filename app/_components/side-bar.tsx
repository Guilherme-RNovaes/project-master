"use client"

import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="w-[97px] h-screen py-8 bg-slate-950 flex flex-col items-center justify-between border-r">
      <Logo />
      <Menu />
      <Profile />
    </div>
  )
}

function Logo() {
  return (
    <div className="rounded-md w-10 h-10 flex items-center justify-center">
      <TaskAlt className="text-blue-600 font-bold" sx={{ fontSize: "41px" }} />
    </div>
  )
}

function Menu() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <BorderAll className="text-blue-600 cursor-pointer" sx={{ fontSize: "27px" }} />
      <Splitscreen className="text-slate-300 cursor-pointer" sx={{ fontSize: "25px" }} />
      <Logout className="text-slate-300 cursor-pointer" sx={{ fontSize: "25px" }} />
    </div>
  )
}

function Profile() {
  return <div className="w-7 h-7 bg-blue-600 rounded-md"></div>;
}
