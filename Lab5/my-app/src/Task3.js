import React, { useState } from 'react';

function Task3() {
  // handleClick
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  // handleMouseOver
  const [hoverText, setHoverText] = useState('Najedź na ten box');
  const handleMouseOver = () => {
    setHoverText('Najechałeś myszką!');
  };

  // showImage
  const [showImage, setShowImage] = useState(false);
  const showImageHandler = () => {
    setShowImage(prev => !prev);
  };

  // loadDataFromJson
  const [jsonData, setJsonData] = useState([]);
  const sampleJson = [
    { id: 1, name: 'Obiekt 1' },
    { id: 2, name: 'Obiekt 2' },
    { id: 3, name: 'Obiekt 3' },
  ];

  const loadDataFromJson = () => {
    // użycie spread – dokładamy dane do istniejących
    setJsonData(prev => [...prev, ...sampleJson]);
  };

  // uploadFile
  const [uploadedFileName, setUploadedFileName] = useState('');
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  // changeStyle – obiekt + spread
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '20px',
    cursor: 'pointer',
    marginTop: '10px',
  });

  const changeStyle = () => {
    setBoxStyle(prev => ({
      ...prev,
      backgroundColor: prev.backgroundColor === 'lightgray' ? 'blue' : 'lightgray',
      color: prev.color === 'black' ? 'white' : 'black',
    }));
  };

  return (
    <div>
      <h2>Zadanie 3 – komponenty funkcyjne</h2>

      {/* handleClick */}
      <section>
        <h3>handleClick</h3>
        <button onClick={handleClick}>Kliknij mnie</button>
        <p>Liczba kliknięć: {clickCount}</p>
      </section>

      {/* handleMouseOver */}
      <section>
        <h3>handleMouseOver</h3>
        <div
          onMouseOver={handleMouseOver}
          style={{
            border: '1px solid black',
            padding: '10px',
            display: 'inline-block',
            marginTop: '5px',
          }}
        >
          {hoverText}
        </div>
      </section>

      {/* showImage */}
      <section>
        <h3>showImage</h3>
        <button onClick={showImageHandler}>
          {showImage ? 'Ukryj obrazek' : 'Pokaż obrazek'}
        </button>
        {showImage && (
          <div>
            <img
              src="/pies.jpg"
              alt="Przykładowy obrazek"
              style={{ marginTop: '10px' }}
            />
          </div>
        )}
      </section>

      {/* loadDataFromJson */}
      <section>
        <h3>loadDataFromJson</h3>
        <button onClick={loadDataFromJson}>Załaduj dane z JSON</button>
        <ul>
          {jsonData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>

      {/* uploadFile */}
      <section>
        <h3>uploadFile</h3>
        <input type="file" onChange={uploadFile} />
        {uploadedFileName && <p>Wybrany plik: {uploadedFileName}</p>}
      </section>

      {/* changeStyle */}
      <section>
        <h3>changeStyle</h3>
        <div style={boxStyle} onClick={changeStyle}>
          Kliknij, żeby zmienić styl boxa
        </div>
      </section>
    </div>
  );
}

export default Task3;
