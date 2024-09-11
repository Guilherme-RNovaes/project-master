import { KeyboardArrowDown } from "@mui/icons-material"

export default function ProjectsSubHeader() {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <MyProjectsText />
      <SortBybytton />
    </div>
  )
}

function MyProjectsText() {
  return <p className="text-[26px] font-bold text-blue-600">My Projects</p>
}

function SortBybytton() {
  return (
    <div className="flex text-[15px] font-semibold gap-3">
      <span className="text-slate-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-300">Recent Project</span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} className="text-blue-600" />
      </div>
    </div>
  )
}

