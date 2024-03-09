import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="text-center container" id="why">
        <h1 className="text-5xl font-bold mb-2">Why learn <span className="text-gradient">financial literacy</span>? 🤔</h1>
        <p className="text-2xl font-normal mb-5">🔮 <b>Prepare for your future.</b> Whether it be launching a business or paying off college debt, you'll be ready for ANYTHING your heart desires! </p>
        <p className="text-2xl font-normal mb-5">💰 <b>Diversify your income.</b> It's important to build multiple streams of income, just in case anything happens to one source. </p>
        <p className="text-2xl font-normal mb-5">🔨 <b>Build your retirement plan.</b> The earlier you start planning, the better. Your post-retirement self will thank you! </p>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container mx-auto text-center">
  <div className="button inline-block">
    <Link to="/budget" className="btn bg-pink-500 text-white-700 border-blue-400 text-white border border-blue-700 hover:bg-gradient-to-r from-purple-300 to-blue-500 p-5 rounded-md">
      Alrighty, I’m ready to learn! 📚
    </Link>
  </div>
</div>





      
    </div>



  );
}
