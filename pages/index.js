import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-around space-y-12">
      <div className="sm:w-1/2">
        <Image
          src="/team-of-critters.svg"
          alt="Four one-eyed aliens playing"
          width={576}
          height={429.734}
          priority
        />
      </div>
      <div className="sm:w-1/2 text-center">
        <h2 className=" p-3 font-bold bg-yellow-300 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </div>
  );
}
