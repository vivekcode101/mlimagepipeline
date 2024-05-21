import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/ask', formData, {
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
        <h2>Visual Question Answering</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Question:
              <input type="text" value={text} onChange={handleTextChange} required className="rounded-input"/>
            </label>
          </div>
          <div>
            <label>
              Upload Image:
              <input type="file" onChange={handleImageChange} required  className="rounded-input"/>
            </label>
          </div>
          <button type="submit" className="rounded-input">Submit</button>
        </form>
        {result && (
          <div>
            <h2>Answer: {result}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
