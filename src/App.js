import React, { useState } from 'react';
import './App.css';
import Login from './Components/ANEWS Webs Login';


function App() {
 const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="ANEWS-wrapper">
      {/* Header */}
      <header className="ANEWS-header">
        <div className="ANEWS-logo">ANEWS
        </div>
        
        <nav className="ANEWS-nav">
  <div className="nav-item">
    <a href="https://www.youtube.com/@A_NEWS_/videos" target='_blank' rel="noreferrer">Home</a>
  </div>

  <div className="nav-item dropdown">
    <span>News</span>
    <div className="dropdown-content">
      <a href="https://www.youtube.com/@A_NEWS_/shorts" target="_blank" rel="noreferrer">Latest News</a>
      <a href="https://www.youtube.com/@Ak_TRENDS">Local</a>
      <a href="https://www.youtube.com/@Ak_TRENDS/videos">National</a>
      <a href="https://www.youtube.com/@Ak_TRENDS/shorts">World</a>
    </div>
  </div>

  <div className="nav-item dropdown">
    <span>Sports</span>
    <div className="dropdown-content">
      <a href="https://www.youtube.com/@AK_TRENDS_">Cricket</a>
      <a href="https://www.youtube.com/@AK_TRENDS_/videos">Football</a>
      <a href="https://www.youtube.com/@AK_TRENDS_/shorts">Other Sports</a>
    </div>
  </div>

  <div className="nav-item">
    <a href="https://www.youtube.com/@A_NEWS_/streams" target='_blank' rel="noreferrer">Travel</a>
  </div>

  <div className="nav-item">
    <a href="https://www.youtube.com/@A_NEWS_" target='_blank' rel="noreferrer">YouTube</a>
  </div>

  <div className="nav-item">
    <a href="https://www.instagram.com/follow.anews" target='_blank' rel="noreferrer">Instagram</a>
  </div>
</nav>


        <div className="ANEWS-actions">
          <span>🔍</span>
          
          <button className="login-toggle" onClick={() => setShowLogin(true)}>
            🔐 Login
          </button>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-modal-overlay">
          <div className="login-modal">
            <button className="modal-close" onClick={() => setShowLogin(false)}>
              ✖
            </button>

            <Login onLogin={() => setShowLogin(false)} />
          </div>
        </div>
      )}




       <span className="ANEWS-date">
          {new Date().toLocaleDateString('en-GB', {
               weekday: 'long',
          })} ,{" "}
           {new Date().toLocaleDateString('en-GB', {
               day: '2-digit',
               month: 'long',
             })}
        </span>

       {/* Welcome Message */}
      <div className="ANEWS-welcome">
        <h1>Welcome to ANEWS.com</h1>
      </div>
      


      {/* Top Stories */}
      <section className="top-stories">
        <div className="main-story">

        <a href="https://youtu.be/xfSTYc9kk4s?si=ZmECnh-nTGnACjLS"  target='_blank'rel="noreferrer">
          <img src="https://img.youtube.com/vi/xfSTYc9kk4s/maxresdefault.jpg" alt="Video thumbnail" />
        </a>
          <div className="story-overlay">
            <h2>డాక్టర్ వృత్తి అంటేనే బార్డర్ లో సైనికుడి లాంటిది </h2>
            
             <div>     {/* 🔽 Your styled link-button main story */}
            <button
               onClick={() => window.open('https://youtu.be/xfSTYc9kk4s?si=ZmECnh-nTGnACjLS', '_blank')}
              className="link-button"  style={{cursor: 'pointer'}}

              
           >
              Play Video
            </button>
          </div>
          
            { /* <p>INDIA</p> */}
        </div>
         </div>

        <div className="side-stories">
          <div className="side-story">
        <a href="https://youtu.be/MFK6Wf24Bcs?si=G6ZtatwzYRTyRJMs"  target='_blank'rel="noreferrer">
           <img src="https://img.youtube.com/vi/MFK6Wf24Bcs/maxresdefault.jpg" alt="Video thumbnail" />
           </a>
            <h4 >రైల్వే జిఎంకు వినతిపత్రం ఇచ్చిన బీజేపీ జిల్లా అధ్యక్షుడు...</h4>
          
            <button
        onClick={() => window.open('https://youtu.be/MFK6Wf24Bcs?si=G6ZtatwzYRTyRJMs', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
        Play Video
      </button>
       </div>

          <div className="side-story">
          <a href="https://youtu.be/IptZXX5-ZD4?si=cUgKvKEk5Jq_8-UX"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/IptZXX5-ZD4/maxresdefault.jpg" alt="Video thumbnail" />
          </a>
            <h4 >మంచిర్యాల రైల్వేస్టేషన్ విస్తరణ పనులను పరిశీలించిన రైల్వే జీఎం...</h4>

            <button
        onClick={() => window.open('https://youtu.be/IptZXX5-ZD4?si=cUgKvKEk5Jq_8-UX', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
        Play Video
      </button>
          </div>

          <div className="side-story">
          <a href="https://youtu.be/jqed-Y9XEKg?si=xSZyCSDXRzgvsY6F"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/jqed-Y9XEKg/maxresdefault.jpg" alt="Video thumbnail" />
          </a>
            <h4 >చెన్నూరు బస్ డిపో కోసం కృషి - మంత్రి వివేక్...</h4>

            <button
        onClick={() => window.open('https://youtu.be/jqed-Y9XEKg?si=xSZyCSDXRzgvsY6F', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
        Play Video
      </button>
          </div>

          <div className="side-story">
            <a href="https://youtu.be/n34Af9PhiZw?si=JpEsyAChGJOEROIv"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/n34Af9PhiZw/maxresdefault.jpg" alt="Video thumbnail" />
            </a>
            <h4 >మెకానిక్ లకు అండగా ఎమ్మెల్యే ప్రేమ్ సాగర్ రావు...</h4>
            
            <button
        onClick={() => window.open('https://youtu.be/n34Af9PhiZw?si=JpEsyAChGJOEROIv', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
        Play Video
      </button>
        </div>

    </div>
    </section>


      
      {/* News Grid */}
      <section className="news-section">
        <h3>News</h3>
        <div className="news-grid">
          <div className="news-card">
            <a href="https://youtu.be/hZZnMcZu4W0?si=JSEkQRQtmm-VP_W5"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/hZZnMcZu4W0/maxresdefault.jpg" alt="NEWS" />
            </a>
            <h4 > మహాప్రస్థానం నిరుపేదలకు ఉచితంగా దహన సంస్కారాలు </h4>

            <button
        onClick={() => window.open('https://youtu.be/hZZnMcZu4W0?si=JSEkQRQtmm-VP_W5', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
                Play Video
            </button>
            </div>

          <div className="news-card">
            <a href="https://youtu.be/pkYjJCYz1mI?si=TnnVIP23maynBeuB"  target='_blank'rel="noreferrer"> 
            <img src="https://img.youtube.com/vi/pkYjJCYz1mI/maxresdefault.jpg" alt="NEWS" />
            </a>
            <h4 > అభివృద్ధిలో మంచిర్యాలను రాష్ట్రంలోనే మొదటి స్థానంలో నిలబెడుతా </h4>

            <button
        onClick={() => window.open('https://youtu.be/pkYjJCYz1mI?si=TnnVIP23maynBeuB', '_blank')}
        className="link-button"  style={{cursor: 'pointer'}}

      >
                Play Video
            </button>
            </div>

          <div className="news-card">
            <a href="https://youtu.be/oAzI21yMmDw?si=brhdkfeM8sSyn5DU"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/oAzI21yMmDw/maxresdefault.jpg" alt="NEWS" />
            </a>
            <h4 > మంచిర్యాల నార్తిన్ హోటల్ లో ఓబీసీ పోరుబాట పుస్తకాన్ని ఆవిష్కరించిన నరహరి </h4>

            <button
              onClick={() => window.open('https://youtu.be/oAzI21yMmDw?si=brhdkfeM8sSyn5DU', '_blank')}
              className="link-button"  style={{cursor: 'pointer'}}

             >
                Play Video
            </button>
          </div>

          <div className="news-card">
            <a href="https://youtu.be/c5UbhQp7I8A?si=Ajb1nb_DSSGUAoRa"  target='_blank'rel="noreferrer">
            <img src="https://img.youtube.com/vi/c5UbhQp7I8A/maxresdefault.jpg" alt="NEWS" />
            </a>
            <h4 > అసాంఘిక కార్యకలాపాలకు పాల్పడితే కఠిన చర్యలు తీసుకుంటాం </h4>

            <button
               onClick={() => window.open('https://youtu.be/c5UbhQp7I8A?si=Ajb1nb_DSSGUAoRa', '_blank')}
              className="link-button"  style={{cursor: 'pointer'}}

            >
                Play Video
            </button>
          </div>

          <div className="news-card">
            <a href="https://youtu.be/calbATbeXSE?si=MYm5VP-K3891RskY"  target='_blank'rel="noreferrer"> 
           <img src="https://img.youtube.com/vi/calbATbeXSE/maxresdefault.jpg" alt="NEWS" />
           </a>
            <h4 > ఘనంగా కట్ట పోచమ్మ బోనాల జాతర </h4>

            <button
               onClick={() => window.open('https://youtu.be/calbATbeXSE?si=MYm5VP-K3891RskY', '_blank')}
              className="link-button"  style={{cursor: 'pointer'}}

            >
                Play Video
            </button>
          </div>
        </div>
      </section>

      <section className="interviews-section">
            <h3>INTERVIEWS🎙️</h3>
          <div className="interviews-grid">

              <div className="interview-card">
                <a href="https://youtu.be/e8Aux6xblv8?si=HQsOr-EQ7oWvhOgj"  target='_blank'rel="noreferrer">
                <img src="https://img.youtube.com/vi/e8Aux6xblv8/maxresdefault.jpg" alt="Interview" />
                </a>
                <h4>రైతే-రాజు లో యువరైతు రాజు తో ఎక్స్ క్లూజివ్ ఇంటర్వ్యూ</h4>
                <button
                  onClick={() => window.open('https://youtu.be/e8Aux6xblv8?si=HQsOr-EQ7oWvhOgj', '_blank')}
                  className="link-button"  style={{cursor: 'pointer'}}

                 > 
                   Play Video
               </button>
              </div>

          <div className="interview-card">
            <a href="https://youtu.be/DEf3SZorDg8?si=najAJOKcdIH9yfBi"  target='_blank'rel="noreferrer">
               <img src="https://img.youtube.com/vi/DEf3SZorDg8/maxresdefault.jpg" alt="Interview" />
               </a>
                <h4>మాజీ ఎమ్మెల్యే గడ్డం అరవిందరెడ్డి ఎక్స్ క్లూజివ్ ఇంటర్వ్యూ</h4>
                <button
                  onClick={() => window.open('https://youtu.be/DEf3SZorDg8?si=najAJOKcdIH9yfBi', '_blank')}
                  className="link-button"  style={{cursor: 'pointer'}}

                 > 
                   Play Video
               </button>
              </div>

              <div className="interview-card">
                <a href="https://youtu.be/R6p3pHMmx1I?si=gbSmVB2GOXT-3K9W"  target='_blank'rel="noreferrer"> 
                <img src="https://img.youtube.com/vi/R6p3pHMmx1I/maxresdefault.jpg" alt="Interview" />
                </a>
                <h4>ది లీడర్ డా.నీలకంఠేశ్వర్ గౌడ్ స్పెషల్ ఇంటర్వ్యూ</h4>
                <button
                  onClick={() => window.open('https://youtu.be/R6p3pHMmx1I?si=gbSmVB2GOXT-3K9W', '_blank')}
                  className="link-button"  style={{cursor: 'pointer'}}

                 > 
                   Play Video
               </button>
              </div>

              <div className="interview-card">
                <a href="https://youtu.be/GnbPQgWFp5c?si=GErrixFpcs034vaG"  target='_blank'rel="noreferrer">
                <img src="https://img.youtube.com/vi/GnbPQgWFp5c/maxresdefault.jpg" alt="Interview" />
                </a>
                <h4>సీనియర్ జర్నలిస్టులతో ప్రత్యేక చర్చ</h4>
                <button
                  onClick={() => window.open('https://youtu.be/GnbPQgWFp5c?si=GErrixFpcs034vaG', '_blank')}
                  className="link-button"  style={{cursor: 'pointer'}}

                 > 
                   Play Video
               </button>
              </div>

              <div className="interview-card">
                <a href="https://youtu.be/RMzjS7PJOSE?si=LUya2j7YHOMEHzpY"  target='_blank'rel="noreferrer">  
               <img src="https://img.youtube.com/vi/RMzjS7PJOSE/maxresdefault.jpg" alt="Interview" />
               </a>
                <h4> డిసిసి అధ్యక్షురాలు కొక్కిరాల సురేఖ స్పెషల్ ఇంటర్వ్యూ</h4>
                <button
                  onClick={() => window.open('https://youtu.be/RMzjS7PJOSE?si=LUya2j7YHOMEHzpY', '_blank')}
                  className="link-button"  style={{cursor: 'pointer'}}

                 > 
                   Play Video
               </button>
              </div>

          </div>
      </section>

   


    </div>
  );
}

export default App;
