
import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  const [prompt, setPrompt] = useState("");
  const [res, setRes] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);


  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    let image_url = response.data.data[0].url;
    console.log(image_url);
    setRes(image_url);
  }



  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  return (
    <>
      <div className='app-main'>
        <h2  className='heading'>Generate an image using Open AI API</h2>
        <input className='app-input' onChange={(e) => setPrompt(e.target.value)} placeholder='Type what you want to generate' />
        <button onClick={generateImage} className='bttn' variant="primary" size="lg">Generate an image</button>
        <img src={res || " "} alt="" className='res-img' />
      </div>
    </>
  );
}

export default App;
