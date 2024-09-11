import ProjectsHeader from "./_components/projects-header"
import ProjectsSubHeader from "./_components/projects-sub-header"

export default function AllProjects() {
  return (
    <div className="bg-slate-950 w-full min-h-screen flex">
      <AllProjectsArea />
    </div>
  )
}

function AllProjectsArea() {
  return (
    <div className="w-[78%] p-10 flex flex-col gap-3 border-r">
      <ProjectsHeader />
      <ProjectsSubHeader />
    </div>
  )
}
