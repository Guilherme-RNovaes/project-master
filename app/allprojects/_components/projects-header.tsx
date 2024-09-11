import { Add, Search } from "@mui/icons-material"

export default function ProjectsHeader() {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  )
}

function SearchBar() {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-blue-600 h-[39px] w-11 justify-center flex items-center">
        <Search className="text-slate-400 outline-none" sx={{ fontSize: "26px" }} />
      </div>
      <div className="border-b-2 border-slate-200">
        <input placeholder="Search a project..." className="p-2 bg-transparent text-[14px] outline-none" />
      </div>
    </div>
  )
}

function AddProjectButton() {
  return (
    <button className="bg-blue-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center">
      <Add className="mt-[2px]" sx={{ fontSize: "22px" }} />
      <span>New Project</span>
    </button>
  )
}

