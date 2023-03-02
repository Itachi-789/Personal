import React, {useState} from 'react'
import Navbar from './Navbar'
import './style.css'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

const WorkingPage = () => {

  const {transcript, listening, resetTranscript} = useSpeechRecognition()

  const str1 = "Life is a journey with many paths and detours. Sometimes the road ahead is clear and smooth, while other times it is rocky and uncertain. Along the way, we encounter many people, some of whom become our closest companions, while others are mere acquaintances. We also face many challenges and obstacles that test our strength, resilience, and determination.But regardless of the path we take, the people we meet, or the challenges we face, we must always remember that we have the power to shape our own destiny. We can choose to stay on the path we're on or take a different route. We can choose to surround ourselves with positive and supportive people or those who bring us down. And we can choose to face our challenges head-on with courage and perseverance."

  let str2 = `${transcript}`

  const [empty,setEmpty] = useState(true)

  let text = true

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null
  }

  return (
    <div className='working-page-container'>
      <Navbar/>
      <div className='textbox-area'>
        <div className='textbox-1'>
          <p>
          {str1}
          </p> 
        </div>
        
        <div className='textbox-2' onChange={setEmpty(false)}> 
          <p>{str2}</p>
        </div>
      </div>
      <div className='instructions'>
          <p> {listening ? 'Recording' : '*Hit Record and read paragraph outloud'}</p>
          <button onClick={SpeechRecognition.startListening}>{text ? 'Record' : 'Stop Recording'}</button>
          <button disabled={empty} id='next-button'>Next</button>
          <button id='reset-button' onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  )
}


export default WorkingPage
