import { FaJava, FaReact } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpring , SiGit, SiGithub } from "react-icons/si";
import { BackIcon } from "../../../Interfaces/Types";

import Bottom from "../../bottom/Bottom";
import Title from "../title/Title";

const icons_bg: BackIcon[] = [
  {
    wave: "waveJava",
    icon: <FaJava fontSize={32} />,
  },
  {
    wave: "waveReact",
    icon: <FaReact fontSize={32} />,
  },
  {
    wave: "waveTypescript",
    icon: <SiTypescript fontSize={32} />,
  },
  {
    wave: "waveSpring",
    icon: <SiSpring fontSize={32} />,
  },
  {
    wave: "waveGit",
    icon: <SiGit fontSize={32} />,
  },
  {
    wave: "waveGithub",
    icon: <SiGithub fontSize={32} />,
  },
  {
    wave: "waveC++",
    icon: <SiCplusplus fontSize={32} />,
  },
];

function Card() {
  return (
    <div className="h-full p-5">
    <Title title="tecnologias"/>
      <section
        className="h-full w-full grid grid-cols-3 grid-rows-3 place-items-center 
        max-[640px]:grid-cols-2 
        max-[640px]:grid-rows-2
        max-[640px]:gap-10
        max-[640px]:pb-10"
      >
        {icons_bg.map((e) => {
          return <Bottom img={e.wave} icons={e.icon} />;
        })}
      </section>
    </div>
  );
}

export default Card;
