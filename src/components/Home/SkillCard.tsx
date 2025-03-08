


function SkillCard() {
  return (
    <div className="m-4 py-3 px-5 flex flex-col gap-3 shadow-md rounded-xl w-lg font-[roboto] bg-white">
        <h1 className="text-2xl font-bold text-gray-800">Skills</h1>
        <div className="text-gray-700">
            <div className="flex flex-wrap gap-2">
                <p className="text-lg font-semibold">HTML</p>
                <p className="text-lg font-semibold">CSS</p>
                <p className="text-lg font-semibold">JavaScript</p>
                <p className="text-lg font-semibold">TypeScript</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-lg font-semibold">Node.js</p>

            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-lg font-semibold">React</p>
                <p className="text-lg font-semibold">Next.js</p>
                <p className="text-lg font-semibold">TailwindCSS</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-lg font-semibold">GraphQL</p>
                <p className="text-lg font-semibold">Redux</p>
                <p className="text-lg font-semibold">Docker</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-lg font-semibold">Git</p>
                <p className="text-lg font-semibold">GitHub</p>
                <p className="text-lg font-semibold">Jest</p>
            </div>      </div>
    </div>
  )
}

export default SkillCard