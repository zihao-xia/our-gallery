import Image from 'next/image';

const Gallery = ({ data }: { data: any }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        <Image
          src={data.sprites.other['official-artwork'].front_default}
          alt="pokemon pic"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Gallery;

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json());
  return {
    props: { data: res },
  };
}
