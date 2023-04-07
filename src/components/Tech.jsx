import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants/contants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tecnology) => (
        <div className="w-32 h-32 flex flex-col items-center" key={tecnology.name}>
          <BallCanvas icon={tecnology.icon}/>
          <p className="text-[14px] font-medium">{tecnology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")