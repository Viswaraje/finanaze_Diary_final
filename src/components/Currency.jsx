import React from 'react'
import './Currency.css'
import { Link } from 'react-router-dom'

export default function Currency() {
  return (
    <>
    <div id="currency-header" align="center">
      <h1> Global Currency Quiz: Augmented Reality Edition </h1>
      <h4>Time to travel around the world! Test your knowledge of global currency through the power of AR. <br/> <br/> At each question, use your phone to scan the QR code and bring up an AR-generated model of the corresponding coin. Select the choice that best answers the question at hand.</h4>
    </div>
    <br/>
    <br/>
    <br/>

    <fieldset>
    <legend><p>1. Which country uses this coin as a form of currency? 🤔 Scan the QR code below or click <a className="underline" href="https://go.echo3d.co/YVUj" target="_blank">here</a> to view in AR! 🌐</p><img  src="https://storage.echo3d.co/twilight-surf-6782/bf858690-820f-43c0-b142-33ca31016945.png" id="ar-pic"/></legend>
    <div class="answers">
      <div class="answer">
        <input type="radio" name="answers[0]" id="answer-0-1" value="1" required/>
        <label for="answer-0-1" class="answer__item">
                    Italy
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[0]" id="answer-0-2" value="2" required/>
        <label for="answer-0-2" class="answer__item">
                    Egypt
                    </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[0]" id="answer-0-3" value="3" required/>
        <label for="answer-0-3" class="answer__item answer__item--is-correct">
                    The United States of America
                </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[0]" id="answer-0-4" value="4" required/>
        <label for="answer-0-4" class="answer__item">
                    Nepal
                </label>
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend><p>2. Which country does not use this coin as currency? 🤔 Scan the QR code below or click <a className="underline" href="https://go.echo3d.co/5jwS" target="_blank">here</a> to view in AR! 🌐</p><img src="https://storage.echo3d.co/curly-block-5310/8cd16aab-d9f6-4546-b6c9-a7814d9aaca8.png" id="ar-pic"/></legend>
    <div className="answers">
      <div className="answer">
        <input type="radio" name="answers[1]" id="answer-1-1" value="1" required/>
        <label for="answer-1-1" className="answer__item answer__item--is-correct">
                    Maldives
                </label>
      </div>
      <div className="answer">
        <input type="radio" name="answers[1]" id="answer-1-2" value="2" required/>
        <label for="answer-1-2" className="answer__item">
                    Cyprus
                </label>
      </div>
      <div className="answer">
        <input type="radio" name="answers[1]" id="answer-1-3" value="3" required/>
        <label for="answer-1-3" className="answer__item">
                    Germany
        </label>
      </div>
      <div className="answer">
        <input type="radio" name="answers[1]" id="answer-1-4" value="4" required/>
        <label for="answer-1-4" className="answer__item">
                    Kosovo
                </label>
      </div>
    </div>
  </fieldset>

  <fieldset>
        <legend><p>3. Which country uses this coin as a form of currency? 🤔 Scan the QR code below or click <a className="underline" href="https://go.echo3d.co/KRoh" target="_blank">here</a> to view in AR! 🌐</p><img src="https://storage.echo3d.co/curly-block-5310/fcd91d4a-ddc5-49c3-8315-479cef9f0b6d.png" id="ar-pic"/></legend>
    <div class="answers">
      <div class="answer">
        <input type="radio" name="answers[2]" id="answer-2-1" value="1" required/>
        <label for="answer-2-1" class="answer__item">
                    Guatemala
                </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[2]" id="answer-2-2" value="2" required/>
        <label for="answer-2-2" class="answer__item">
                    Nicaragua
                </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[2]" id="answer-2-3" value="3" required/>
        <label for="answer-2-3" class="answer__item answer__item--is-correct">
                    Mexico
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[2]" id="answer-2-4" value="4" required/>
        <label for="answer-2-4" class="answer__item">
                    Haiti
                </label>
      </div>
    </div>
  </fieldset>
      
      <fieldset>
        <legend><p>4) Which country uses this coin as a form of currency? 🤔 Scan the QR code below or click <a className="underline" href="https://go.echo3d.co/uH7H" target="_blank">here</a> to view in AR! 🌐</p><img src="https://storage.echo3d.co/curly-block-5310/c45dba16-f21c-45c0-bbbc-67988f7c011c.png" id="ar-pic"/></legend>
    <div class="answers">
      <div class="answer">
        <input type="radio" name="answers[3]" id="answer-3-1" value="1" required/>
        <label for="answer-3-1" class="answer__item">
                    Greece
                </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[3]" id="answer-3-2" value="2" required/>
        <label for="answer-3-2" class="answer__item">
                    Austria
                </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[3]" id="answer-3-3" value="3" required/>
        <label for="answer-3-3" class="answer__item answer__item--is-correct">
                    The United Kingdom
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answers[3]" id="answer-3-4" value="4" required/>
        <label for="answer-3-4" class="answer__item">
                    Belgium
                </label>
      </div>
    </div>
  </fieldset>
  <br/>
  <br/>
  
  <div className="container mx-auto text-center">
  <div className="button inline-block">
    <Link to="/hustles" className="btn bg-pink-500 text-white-700 border-blue-400 text-white border border-blue-700 hover:bg-gradient-to-r from-purple-300 to-blue-500 p-5 rounded-md">
    I am done!!Ready for the next hack 📚
    </Link>
  </div>
</div>
 




 
</>
  
         
    
  )
}

