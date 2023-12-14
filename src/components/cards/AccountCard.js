import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const AccountCard = () => {
  const { data: session } = useSession();

  return (
    <div className="column gap-3">
      <Image
        src={session?.user.image}
        width={60}
        height={60}
        className="rounded-full"
      />
      <h1 className="text-lg font-bold">Hello, {session?.user.name}!</h1>
      <p className="text-stone-400 column gap-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti
      </p>
      <button className="fill-btn"><span>Learn more</span></button>
    </div>
  );
};

export default AccountCard;
