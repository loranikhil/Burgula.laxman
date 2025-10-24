import React from 'react';
import { 
  Music, 
  Mic2,
  Users, 
  Trophy, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Award, 
  Star,
  PlayCircle,
  Radio,
  Headphones,
  Globe,
  ExternalLink
} from 'lucide-react';
import './Law.css';

const Law = () => {
  const stats = [
    { number: "500+", label: "Performances", icon: Music },
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "1000+", label: "Happy Audiences", icon: Users },
    { number: "50+", label: "Awards Won", icon: Trophy }
  ];

  const services = [
    {
      icon: Mic2,
      title: "Folk Music Concerts",
      description: "Experience the authentic sounds of Telangana folk music through captivating live performances. Burgula laxman brings traditional folklore to life with powerful vocals and emotional storytelling that connects with audiences of all ages."
    },
    {
      icon: Radio,
      title: "Cultural Events",
      description: "Specialized performances for cultural festivals, government events, and community celebrations. Preserving and promoting the rich heritage of Telangana folk traditions through music that celebrates our roots and cultural identity."
    },
    {
      icon: Heart,
      title: "Wedding Ceremonies",
      description: "Add authentic traditional folk music to your special day with customized performances. Celebrate your wedding with the timeless melodies and rhythms of Telangana folk songs that create unforgettable memories for you and your guests."
    },
    {
      icon: Award,
      title: "Private Functions",
      description: "Bring the magic of folk music to your private events, corporate gatherings, and family celebrations. Tailored performances that suit the occasion while maintaining the authentic essence of traditional Telangana folk artistry."
    },
    {
      icon: Globe,
      title: "Music Recordings",
      description: "Professional recording services for albums, devotional songs, and promotional content. Preserving folk traditions through high-quality recordings that capture the soul and spirit of authentic Telangana folk music for generations to come."
    },
    {
      icon: Headphones,
      title: "Music Workshops",
      description: "Educational sessions and workshops to teach traditional folk singing techniques and preserve cultural heritage. Passing on the rich legacy of Telangana folk music to the next generation through dedicated training and mentorship."
    }
  ];

  const videos = [
    {
      id: "1un0LzC21oo",
      url: "https://youtu.be/1un0LzC21oo?si=Hw4EKS6UNmjRb1nr",
      thumbnail: "https://img.youtube.com/vi/1un0LzC21oo/maxresdefault.jpg",
      title: "Folk Performance 1"
    },
    {
      id: "AylniDaWy0Y",
      url: "https://youtu.be/AylniDaWy0Y?si=f1mzFWNpc9X1jgHk",
      thumbnail: "https://img.youtube.com/vi/AylniDaWy0Y/maxresdefault.jpg",
      title: "Folk Performance 2"
    },
    {
      id: "rkoEJ94J2Z4",
      url: "https://youtu.be/rkoEJ94J2Z4?si=RitOJi-XY3bZBECb",
      thumbnail: "https://img.youtube.com/vi/rkoEJ94J2Z4/maxresdefault.jpg",
      title: "Folk Performance 3"
    },
    {
      id: "72oGuhN6TBk",
      url: "https://youtu.be/72oGuhN6TBk?si=VNtbyMiq6ZxQhdmG",
      thumbnail: "https://img.youtube.com/vi/72oGuhN6TBk/maxresdefault.jpg",
      title: "Folk Performance 4"
    },
    {
      id: "92c1hBsigzY",
      url: "https://youtu.be/92c1hBsigzY?si=ieiFZQPYrsI4hZpE",
      thumbnail: "https://img.youtube.com/vi/92c1hBsigzY/maxresdefault.jpg",
      title: "Folk Performance 5"
    }, 
    {
      id: "hcbK0J08Ps",
      url: "https://youtu.be/_hcbK0J08Ps?si=1u4VWkG22aad5RG2",
      thumbnail: "https://img.youtube.com/vi/_hcbK0J08Ps/maxresdefault.jpg",
      title: "Folk Performance 6"
    },
    {
      id: "Xh7m0pKsFkY",
      url: "https://youtu.be/Xh7m0pKsFkY?si=Bii63yjMbve5qLCJ",
      thumbnail: "https://img.youtube.com/vi/Xh7m0pKsFkY/maxresdefault.jpg",
      title: "Folk Performance 7"
    },
    {
      id: "e3oqSwNWuo8",
      url: "https://youtu.be/e3oqSwNWuo8?si=ezrUX2tPnDx2p6cQ",
      thumbnail: "https://img.youtube.com/vi/e3oqSwNWuo8/maxresdefault.jpg",
      title: "Folk Performance 8"
    },
    {
      id: "BXDKkcH04fo",
      url: "https://youtu.be/BXDKkcH04fo?si=2IxRK4ptR2gTzaIZ",
      thumbnail: "https://img.youtube.com/vi/BXDKkcH04fo/maxresdefault.jpg",
      title: "Folk Performance 9"
    },
   
  ];

  return (
    <div className="singer-portfolio">
      {/* Hero Section */}
      <section id="Home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Authentic Telangana Folk Music That Touches Hearts
              </h1>
              <p className="hero-description">
                With over 15 years of experience in folk music, I bring the rich cultural heritage 
                of Telangana to life through powerful vocals and heartfelt performances. My mission 
                is to preserve traditional folk art while touching the hearts of modern audiences.
              </p>
              
              {/* Stats */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <stat.icon className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Booking Button */}
              <button
                className="consultation-btn"
                onClick={() => {
                  window.location.href = 'tel:+919951155742';
                }}
              >
                <Phone className="btn-icon" />
                Book Performance
              </button>
            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <img 
                  src="https://i.ibb.co/27NH3WZH/DSC-0711-copy.jpg" 
                  alt="Burgula Laxman - Folk Singer"
                  className="hero-image"
                />
                <div className="image-overlay">
                  <div className="contact-info">
                    <div className="contact-item">
                      {/* <Music size={30} /> */}
                      <span>Burgula Laxman (Folk Singer)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="section-header">
                <h2 className="section-title">Meet Burgula Laxman</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="about-text">
                <p className="lead-paragraph">
                  With over 15 years of dedication to folk music, Burgula Laxman combines authentic 
                  traditional artistry with passionate performances that resonate deeply with audiences 
                  across Telangana and beyond.
                </p>
                 
                <p>
                  Specializing in <span className="highlight">Traditional Folk Songs, Devotional Music, 
                  and Cultural Performances</span>, I work tirelessly to preserve and promote the rich 
                  musical heritage of Telangana. I believe that folk music is not just entertainment, 
                  but a vital link to our cultural roots and identity.
                </p>
                
                <p>
                  As a celebrated folk artist, my soul-stirring performances have earned recognition 
                  and love from audiences throughout <span className="highlight">Telangana and neighboring 
                  states</span>. I am committed to keeping traditional folk music alive, 
                  believing it is essential for preserving our cultural heritage for future generations.
                </p>
                
                <p>
                  By understanding the emotional and cultural significance of each song, I deliver 
                  performances that are both authentic and deeply moving. Renowned for my powerful voice 
                  and genuine connection with traditional music, I have become a trusted name in folk 
                  music circles and a beloved performer at cultural events.
                </p>
              </div>
            </div>
            
            <div className="about-right">
              <div className="credentials-card">
                <div className="credentials-header">
                  <Star className="credentials-icon" />
                  <h3>Achievements & Recognition</h3>
                </div>
                
                <div className="credentials-list">
                  <div className="credential-item">
                    <div className="credential-content">
                      <h4>Folk Music Excellence</h4>
                      <p>15+ Years of Traditional Music</p>
                      <span className="credential-type">Master Performer</span>
                    </div>
                  </div>
                  
                  {/* <div className="credential-item">
                    <div className="credential-content">
                      <h4>Cultural Ambassador</h4>
                      <p>Telangana Folk Heritage</p>
                      <span className="credential-type">Traditional Artist</span>
                    </div>
                  </div> */}
                </div>
                
                <div className="specialization-tags">
                  <span className="tag">Folk Songs</span>
                  <span className="tag">Devotional Music</span>
                  <span className="tag">Cultural Events</span>
                  <span className="tag">Live Performances</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Videos Section */}
      <section id="Videos" className="videos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Performance Videos</h2>
            <p className="section-subtitle">
              Watch my performances and experience the magic of Telangana folk music
            </p>
          </div>

          <div className="videos-grid">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="video-card"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <PlayCircle className="play-icon" />
                  </div>
                  <div className="video-duration-badge">
                    <ExternalLink size={16} />
                    <span>Watch on YouTube</span>
                  </div>
                </div>
                {/* <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">Live Folk Performance</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Performance Services</h2>
            <p className="section-subtitle">
              Bringing authentic Telangana folk music to your special occasions
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-container">
                  <service.icon className="service-icon" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Law;