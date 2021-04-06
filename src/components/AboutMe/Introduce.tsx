import React from "react";
import introduceImage from "../../image/mountains.jpg";
interface Props {}

const Introduce = (props: Props) => {
  return (
    <section className='h-full ml-28 mt-20'>
      <div
        className='w-full h-1/2 bg-no-repeat bg-center bg-cover mb-10 rounded-lg'
        style={{
          backgroundImage: `url("${introduceImage}")`,
        }}></div>
      <div>
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
    </section>
  );
};

export default Introduce;
