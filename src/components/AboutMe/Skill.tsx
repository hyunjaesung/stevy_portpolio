import React from "react";
import tmonImage from "../../image/tmon.png";

const skills = [
  { tech: "HTML", score: 10 },
  { tech: "CSS", score: 8 },
  { tech: "Javascript", score: 10 },
  { tech: "Typescript", score: 8 },
  { tech: "React", score: 10 },
  { tech: "NodeJS", score: 6 },
  { tech: "NextJS", score: 6 },
  { tech: "Jest", score: 6 },
];
const experiences = [
  {
    name: "TMON",
    period: "2019.07 - now",
    jobs: ["Front-End Developer"],
    image: tmonImage,
  },
];

const Skill = () => {
  return (
    <div className='slide-in-blurred-top flex justify-around w-full items-start mb-36'>
      <section className='w-1/2 p-5'>
        <h1 className='text-5xl font-bold'>skills</h1>
        <div className='mt-3 mb-5 w-1/2 border-black h-1 bg-black opacity-80'></div>
        <ul className='skill-bars pr-10'>
          {skills.map(({ tech, score }) => (
            <li key={tech} className='bar mb-9'>
              <div className='info mb-2'>
                <span className='text-xl font-semibold'>{tech}</span>
              </div>
              <div className='progress-line css'>
                <span style={{ width: `${score}0%` }}></span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className='w-1/2 p-5'>
        <h1 className='text-5xl font-bold'>experiences</h1>
        <div className='mt-3 mb-5 w-1/2 h-1 border-black bg-black opacity-80'></div>
        <ul className='w-full'>
          {experiences.map(({ name, period, jobs, image }) => (
            <li
              className='shadow-drop-br rounded-lg mt-6 w-full h-32 flex items-center'
              key={name}>
              <div
                className='mr-5 h-full bg-no-repeat bg-center bg-contain rounded-lg filter grayscale w-1/5'
                style={{
                  backgroundImage: `url("${image}")`,
                }}></div>
              <div className='h-full flex flex-col justify-center items-start'>
                <span className='text-3xl font-bold'>{name}</span>
                <span className='text-lg font-bold opacity-60'>{period}</span>
                {jobs.map((job) => (
                  <span className='font-semibold opacity-80' key={job}>
                    {job}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skill;
