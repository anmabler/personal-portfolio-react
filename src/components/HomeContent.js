import React from "react";
import martina from '../images/20210818_110104.jpg'

export default function HomeContent() {
  return (
    <>
      <h1 className="font-bold text-5xl my-4">Martina Blixt Eriksson</h1>
      <div className="p-10 flex justify-center items-baseline m-auto max-w-screen-md ">
        <div className="min-w-min">
          <img
            src={martina}
            alt="profile"
            className="object-cover rounded-full"
          />
        </div>

      </div>
        <div className="text-left">
          <h1 className="font-bold text-3xl my-4">Welcome to my Portfolio website!</h1>
          <p className="">
            I am a junior developer with a passion for learning.
          </p>
          <p>I'm currently attending a full stack course in C# and JavaScript. See the "About me" page for more information.</p>
        </div>
    </>
  );
}
