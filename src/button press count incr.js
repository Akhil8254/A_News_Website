import React, { useState, useEffect } from 'react'; // ✅ Added useEffect

function App() {
  // ✅ Initialize from localStorage
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('subscriberCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  // ✅ Save to localStorage on count change
  useEffect(() => {
    localStorage.setItem('subscriberCount', count.toString());
  }, [count]);

  //subs count alignmnt
  const [imageURL, setImageURL] = useState(null);
  const [category, setCategory] = useState('Top');
  const [savedImages, setSavedImages] = useState([]);
  const [theme, setTheme] = useState('light');

   useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
    document.body.style.color = theme === 'dark' ? '#ffffff' : '#000000';
  }, [theme]);

  const headlines = {
    Top: [
      'Breaking: Market Hits Record High',
      'Global Climate Summit Begins Today',
      'Tech Giants Release AI Safety Guidelines'
    ],
    Sports: [
      'Championship Game Ends in Overtime Thriller',
      'Olympics 2025 Preparations Underway'
    ],
    World: [
      'Leaders Convene in Geneva for Peace Talks',
      'Economic Growth Spikes in Southeast Asia'
    ]
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
        setSavedImages([...savedImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const buttonGroupStyle = {
    display: 'flex',                        //middle 3 buttons
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '10px',
  };

  const loveButtonStyle = {  //headlines  TOPIC BUTTONS changes here
    padding: '10px 20px',
    margin: '10px' ,
    fontSize: '18px',
    border: '2px solid #ff69b4',
    backgroundColor: '#fff0f5',
    color: '#d63384',
    borderRadius: '80px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const categoryButtons = Object.keys(headlines).map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      style={{
        ...loveButtonStyle,
        backgroundColor: category === cat ? '#FFD700' : '#fff0f5', //hedln bckgrd color
        color: category === cat ? '#fff' : '#FFD700', //Hedline text color
      }}
    >
      {cat}
    </button>
  ));

  return (
    <div style={{ fontFamily: 'Arial', marginTop: '0px' }}>
      {/* Header Section */}
      <div
  style={{
    backgroundColor: '		#000000', // 🎨 Header background
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  }}

      >
        {/* ANEWS Title */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
         <h1
         className="animated-title"
         style={{
         fontFamily: 'Pacifico',
        fontWeight: 900,
        margin: 10,
         fontSize: '60px', // optional: larger text looks cooler animated
         }}
          >
            ANEWS
          </h1>
           
        </div>        

        {/* Category Buttons - can align separately */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
    {categoryButtons}
  </div>

 {/* Theme Toggle - aligned separately */}
  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: '10px' }}>
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        fontSize: '24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '10px',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  </div>
</div>

      <hr className="glow-shift-line" />

      <style>
        {`                          //horizontal line->
          .glow-shift-line { 
            width: 100%;              
            height: 4px;
            border: none;
            margin: 40px auto;
            background: linear-gradient(90deg, #FFD700, #ff1493, #66FF66, #6699FF);
            background-size: 300% 100%;
            animation: colorShift 3s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
            box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
          }

          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
            }
            50% {
              box-shadow: 0 0 24px #ff1493, 0 0 48px #ff4500;
            }
          }
        `}
      </style>

      {/* Subscriber Counter */}
{/* Subscriber Counter with flexible alignment */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center', // Use 'flex-start' → align left,'center' → align center, 'flex-end' → align right
    marginTop: '20px',
    padding: '0 20px',
  }}
>
  <p style={{ fontSize: '18px', margin: 0 }}>
    Hello {count} Subscribers 
  </p> 
</div>

      {/* Subscriber Buttons */}
      <div style={buttonGroupStyle}>
        <button style={loveButtonStyle} onClick={() => setCount(count + 1)}>💗</button>
        <button style={loveButtonStyle} onClick={() => setCount(count + 19000)}>💖 +19k</button>
        <button style={loveButtonStyle} onClick={() => setCount(0)}>💔 Reset</button>
      </div>

      {/* Headlines */}
      <div style={{ textAlign: 'center' ,marginTop: '20px' }}>
        <h2>{category} Headlines</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {headlines[category].map((headline, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{headline}</li>
          ))}
        </ul>
      </div>

      {/* Upload Image */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <input
          type="file"
          accept="image/*"
          id="upload"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <label
          htmlFor="upload"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
            display: imageURL ? 'none' : 'inline-block',
          }}
        >
          📤 Upload Image
        </label>

        {imageURL && (
          <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
            <img
              src={imageURL}
              alt="Uploaded Preview"
              style={{
                width: '300px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            />
            <button
              onClick={() => {
                setImageURL(null);
              }}
              style={{
                position: 'absolute',
                top: '3px',
                right: '3px',
                background: 'none',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                width: '30px',
                height: '30px',
                fontSize: '10px',
                cursor: 'pointer',
              }}
              aria-label="Remove Image"
            >
              ❌
            </button>
          </div>
        )}
      </div>

      

      <hr className="glow-shift-line" />
                                          
      <style>
        {`                        
          .glow-shift-line {  // horizontal line
            width: 100%;
            height: 4px;
            border: none;
            margin: 5px auto;
            background: linear-gradient(90deg, #FFD700, #ff1493, #66FF66, #6699FF);
            background-size: 300% 100%;
            animation: colorShift 3s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
            box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
          }

          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
            }
            50% {
              box-shadow: 0 0 24px #ff1493, 0 0 48px #ff4500;
            }
          }
        `}
      </style>

      {/* Saved Images */}
      {savedImages.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3>Saved Uploads</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {savedImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Upload ${idx}`}
                style={{ width: '100px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
              />
            ))}
          </div>
        </div>
      )}

         {/*  ANEWS Glow CSS Styles */}
         <style>
        {`
          .glow-shift-line {
            width: 100%;
            height: 4px;
            border: none;
            margin: 20px auto;
            background: linear-gradient(90deg, #FFD700, #66FF66, #6699FF);
            background-size: 300% 100%;
            animation: colorShift 3s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
            box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
          }

          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 12px #ff69b4, 0 0 24px #ff1493;
            }
            50% {
              box-shadow: 0 0 24px #ff1493, 0 0 48px #ff4500;
            }
          }

          .animated-title {
            animation: pulseGlow 2s ease-in-out infinite, colorFlow 6s ease-in-out infinite;
            background: linear-gradient(90deg, red, orange, gold, deeppink, red);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }

          @keyframes pulseGlow {
            0%, 100% {
              text-shadow: 0 0 5px red, 0 0 10px orange, 0 0 15px gold;
            }
            50% {
              text-shadow: 0 0 10px gold, 0 0 20px deeppink, 0 0 30px red;
            }
          }

          @keyframes colorFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>


    </div>
  );
}

export default App;
