import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);

    try {
      const response = await axios.post('https://mlimage.test.demo.initz.run/ask', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data.Answer);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{textAlign:"center"}}>Visual Question Answering</h2>
        <form onSubmit={handleSubmit}>
          <div className='ques'>
            <label>
              Question:
              <input type="text" value={text} onChange={handleTextChange} required className="rounded-input" />
            </label>
          </div>
          <div className='ques'>
            <label>
              Upload Image:
              <input type="file" onChange={handleImageChange} required className="rounded-input" />
            </label>
          </div>
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Selected" />
            </div>
          )}
          <button type="submit" className="rounded-input">Submit</button>
        </form>
      </header>
        {result && (
          <div className="answer-card">
            <h3>Answer:</h3>
            <p>{result}</p>
          </div>
        )}
    </div>
  );
}

export default App;
