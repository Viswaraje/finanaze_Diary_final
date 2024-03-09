import React from 'react';
import { Link } from 'react-router-dom';

export default function Facts() {
  return (
    <>
      <div id="facts-header" className="text-center">
        <h1 className="text-5xl"> Finance Lessons: 3D Edition </h1>
        <h4 className="text-base mb-6">
          Let's dive deeper into the world of investing...but this time, in 3D! Hit play, then click on each floating flashcard to learn more about that word. 📚
          <br />
          <br />
          Tip: Use the keys A, W, S, & D to walk around, and rotate your view while pressing your mouse.
        </h4>
      </div>
      <div className="container mx-auto flex justify-center" id="facts-1">
        <iframe
          className="border-2 border-black rounded-2xl"
          width="640"
          height="480"
          frameBorder="0"
          src="https://edu.cospaces.io/FJJ-YHE"
        ></iframe>
      </div>

      <div className="container mx-auto text-center">
  <div className="button inline-block">
    <Link to="/currency" className="btn bg-pink-500 text-white-700 border-blue-400 text-white border border-blue-700 hover:bg-gradient-to-r from-purple-300 to-blue-500 p-5 rounded-md">
    I am done!!Ready for the next hack 📚
    </Link>
  </div>
</div> 



 
      
    </>
  );
}
