import React from "react";
import worksData from "../worksData";

interface Props {
  data: typeof worksData[0];
}

const WorkItem = ({ data: { image } }: Props) => {
  return (
    <>
      <div
        className='slide-in-blurred-top w-full h-1/2 bg-no-repeat bg-center bg-cover mb-10 rounded-lg'
        style={{
          backgroundImage: `url("${image}")`,
        }}></div>
      <div className='slide-in-blurred-top'>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos
          voluptates ut iste, itaque alias, aliquid rerum aliquam atque deleniti
          exercitationem? Consectetur totam nobis error fugiat harum deleniti
          voluptates modi itaque? Ipsa culpa itaque pariatur, cupiditate magnam
          voluptas veritatis minus rerum nisi corrupti, consequuntur in
          temporibus quidem quod similique? Sed porro alias esse minima quam
          doloribus exercitationem deserunt aperiam molestias, molestiae,
          reprehenderit, quae impedit itaque ullam. Cumque eaque tempore
          voluptate sed nesciunt exercitationem est expedita, temporibus sunt ad
          consequatur nobis quasi voluptatem facere ex voluptates quo, veniam
          vel. Excepturi, porro modi! Debitis quaerat omnis et beatae. Obcaecati
          numquam voluptatum hic voluptatem quas modi nam rem quis eum non
          veniam quasi iusto velit nisi fugit, labore unde, porro tenetur totam
          delectus incidunt. Obcaecati sequi quos porro quibusdam assumenda r
        </p>
      </div>
    </>
  );
};

export default WorkItem;
