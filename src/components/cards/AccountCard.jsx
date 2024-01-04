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
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">
          Hello, {session?.user.name.split(" ")[0]}!
        </h1>
        <p className="text-stone-400 column gap-0">
          Ready to update your new profile?
        </p>
        <button className="fill-btn mt-2">
          <span> Update Profile</span>
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
