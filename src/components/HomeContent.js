import React from "react";

export default function HomeContent() {
  return (
    <>
      <h1 className="font-bold text-5xl my-4">Lorem ipsum dolor sit.</h1>
      <div className="p-10 flex justify-center items-baseline m-auto max-w-screen-lg ">
        <div className="min-w-min">
          <img
            src="https://thispersondoesnotexist.com/"
            alt="profile"
            className="object-cover rounded-full"
          />
        </div>

        <div>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            est odit animi ipsa odio quas itaque accusamus, quia atque impedit.
            Aliquid, a facere doloremque doloribus minima voluptatum aspernatur
            corrupti nisi cupiditate? Ducimus animi temporibus voluptates autem
            nemo optio atque unde assumenda recusandae provident aliquam
            doloremque nisi, necessitatibus quo, similique architecto!
          </p>
        </div>
      </div>
    </>
  );
}
