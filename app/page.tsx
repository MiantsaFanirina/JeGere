import Image from "next/image";

export default function Home() {
  return (
      <div className={'h-screen w-[50vw] overflow-hidden fixed top-0 left-0'}>
        <Image
            src={'/character/character.png'} alt={'character'} width={1000} height={1000}
            className={'h-1/3 md:h-1/2 w-auto absolute bottom-0 left-1/2 -translate-x-1/2'}
        />
      </div>
  );
}
