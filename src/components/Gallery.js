import React, { useState } from 'react'
// import PhotoAlbum from "react-photo-album";
import "../css_files/mahesh.css"
import Slider from 'infinite-react-carousel';
import GalleryComponent from './GalleyComponent';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const photos = [
  {
    src: 'https://www.smilefoundationindia.org/wp-content/uploads/2023/03/Layer-109-1-768x568.png', width: 4, height: 3, caption: "Over 5,000 children empowered with quality education and counting."
  },
  { src: 'https://www.smilefoundationindia.org/wp-content/uploads/2023/03/FOCUS-1-768x623.png', width: 1, height: 1, caption: 'Providing care and support to 3,500+ seniors in need.' },
  { src: 'https://www.smilefoundationindia.org/wp-content/uploads/2022/12/gaurav.jpg', width: 3, height: 4, caption: "89% children in out project areas, under the age of 5 years, protected from undernourishment" },
  { src: 'https://www.smilefoundationindia.org/wp-content/uploads/2022/12/yash.jpg', width: 3, height: 4, caption: 'Improving the health of 2,500+ little ones through our programs.' }
];

var stories = [
  {
    id: 1,
    name: 'SARITA DEVI',
    text: ' “I don’t know if I will be able to survive another winter. After losing my only son, I became homeless. Strangers from the slums have offered me places to sleep and food to eat. My health has become tricky. I fall sick often. Some days, I cannot even get up from my makeshift arrangements. By God’s grace, I came across a medical van that was offering people free medical check- ups and medicines.It was surprising for me to see such a set - up inside a van.The doctors are kind and listen to me patiently when I tell them about my condition.It has been a life - changing experience for me.” Sarita Devi receives free healthcare services through Smile on Wheels mobile hospital project in New Delhi.',
    img: 'https://www.smilefoundationindia.org/wp-content/uploads/2023/05/2-2.png',
  },
  {
    id: 2,
    name: 'YASH',
    text: 'Five year old Yash lives with his family in the JJ Colony of Noida’s Sector 9. His father Sispal is a mechanic by profession and earns just enough to sustain their family. Yash was diagnosed with burns last year.He wasn’t keeping well for a long time and needed urgent medical attention in the middle of the pandemic.Due to financial constraints, his family could not take him to a private hospital.Meanwhile government hospitals were full because of COVID patients. During a regular visit of the Smile on Wheels van supported by Ericsson in his area, Yash visited the MMU and was diagnosed with burns.Smile on Wheels is a mobile hospital service provided by Smile Foundation to provide healthcare services to the under- privileged in rural areas and urban slums of India.The doctors at Smile on Wheels prescribed proper medication to him and counseled his parents on how to take care of him.Due to correct treatment and care from his family, his condition started improving. Yash and his family are grateful to Smile on Wheels team for saving his life during the pandemic.',
    img: 'https://www.smilefoundationindia.org/wp-content/uploads/2022/12/yash.jpg',
  },
  {
    id: 3,
    name: 'KRISHNA DEVI',
    text: "Recently, I have been asked to earn for myself as nobody among my children could afford to feed me two times a dayKrishna Devi sells papad on the roadside.She earns 100-150 per day which is sufficient for her to feed herself and sometimes buy sweets for her grandchildren.Krishna’s wrinkled face and toothless smile does not give away her pain that she has to go through every day; her children refused to support her anymore and asked her to earn and live on her own.She also faces health issues related to old age. When the Smile on Wheels volunteer came to know about Krishna she immediately visited her and told her about the regular visits of the Smile on wheels mobile hospital and the services provided.Krishna Devi was overjoyed because now she could avail healthcare at her door step and avoid losing a day’s earning. Krishna Devi’s health care is now being taken care of by team Smile ion Wheels along with many like her.",
    img: 'https://www.smilefoundationindia.org/wp-content/uploads/2022/12/krishna-devi.jpg',
  },
  {
    id: 4,
    name: 'RANI',
    text: 'Five-year-old Rani lives with her family of six in Sukhraili Village, Gurugram. Her mother is the sole bread winner in the family and works in a private company in Gurugram.During the pandemic, Rani suffered a serious injury on her right foot and was unable to walk properly.However, due to financial constraints she wasn’t able to go to the hospital or consult a doctor.In the meanwhile, her family came to know about Smile on Wheels, a mobile hospital service provided by Smile Foundation to provide healthcare services to the under- privileged in rural areas and urban slums of India and decided to consult our doctors. The team of Smile on Wheels van supported by Ericsson examined her properly and started immediate treatment.Due to quick action and adequate measures by the doctors, Rani’s injury started healing. Rani and her family are happy and grateful that she’s finally able to walk on her own.',
    img: 'https://www.smilefoundationindia.org/wp-content/uploads/2022/12/rani.jpg',
  },
  {
    id: 5,
    name: 'MAMTHA',
    text: 'I break stones in a nearby construction site. My husband is paralysed since a long time so I must feed him. I have seen the world change around me. I have seen people leaving you alone in hard times. Sitting in a corner and crying about your destiny helps no one. I work hard to provide for my husband and I. Physical labour and old age means that my body would have to face many medical ailments. On many days, my body aches beyond my strength to cope with it. When fixing two meals becomes a challenge, health- related expenses have to take a backseat.But the free doorstep healthcare by Smile Foundation has made our lives better.We now get our health check - ups done regularly and get medicines free of cost here.” Mamtha and her husband(both in their late 60s) are able to access free healthcare through our free doorstep healthcare initiative, Smile on Wheels.',
    img: 'https://www.smilefoundationindia.org/wp-content/uploads/2023/05/4-2.png',
  }
];

const Gallery = () => {

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showCaption, setShowCaption] = useState(false);
  const [Story, setStory] = useState({})
  // const [Text, setText] = useState("Default");
  // const slidesToShow = window.innerWidth > 200 ? 3 : 1;
  const slidesToShow = 4
  const slidesToShow2 = window.innerWidth > 900 ? 3.5 : 1;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${window.innerWidth > 900 ? '70%' : '90%'} `,
    height: 'fit-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: `${window.innerWidth > 500 ? 'row' : 'column'}`,
    alignItems: 'top',
    justifyContent: 'space-around',
    p: 4,
  };
  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    centerMode: true,
    duration: 500,
    slidesToShow: slidesToShow,
    pauseOnHover: false
  };
  const settings2 = {
    arrows: true,
    arrowsBlock: false,
    autoplay: true,
    centerMode: true,
    duration: 500,
    slidesToShow: slidesToShow2,
    pauseOnHover: false,
    dots: false,
    autoplaySpeed: 3000,

  };
  const sliderimgstyle = {
    // border: '2px solid #000',
    width: `${window.innerWidth > 900 ? '350px' : '20%'}`,
    height: `${window.innerWidth > 900 ? '350px' : '100%'}`,
    // width: '30%',
    // maxWidth: '300px',
    // height: '100%',
    // maxHeight: '300px',
    margin: '1em',
    borderRadius: '50%',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  }
  const sliderimgstyle2 = {
    width: `${window.innerWidth > 900 ? '300px' : '200px'}`,
    // height: `${window.innerWidth > 900 ? '400px' : '200px'}`,
    // width: '100%',
    height: `${window.innerWidth > 900 ? '300px' : '200px'}`,
    margin: '2rem',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  }
  const sliderdivstyle2 = {
    width: `${window.innerWidth > 900 ? '500px' : '200px'}`,
    // width: '100%',
    height: '250px',
    margin: ' 0 1em',
    borderRadius: '0px',
  }

  const handleButton = (story) => {
    console.log("Button Clicked");
    console.log(story)
    setStory(story)
    handleOpen()
  }

  const handleMouseEnter = (e, index) => {
    setHoveredIndex(index);
    console.log(e.target.caption);
    setShowCaption(false); // Reset the showCaption state when hovering over a new image
    setTimeout(() => setShowCaption(true), 200); // Show the caption after 1 second
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setShowCaption(false);
  };

  function truncateText(text, maxWords) {
    const words = text.trim().split(' ');
    return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
  }
  return (
    <>
      <div className="headtitle">
        <div style={{
          fontSize: `${window.innerWidth > 600 ? '2rem' : '1.3rem'
            }`,
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '2rem auto',
          borderBottom: '2px solid #000',
          paddingBottom: '0.5rem',
          width: `${window.innerWidth > 900 ? 'fit-content' : '80%'} `,
        }}>
          <div>4+ Decades. 19 States.</div>
          <div>3 Million Children.</div>
        </div>
        <div style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          margin: '2rem auto',
          width: 'max(50%,200px)',
        }}>We’ve been able to make a positive impact on the lives of so many people, all thanks to your unwavering support.</div>
      </div>

      <div style={{
        background: 'linear-gradient(white 0%, rgb(255,115,0,0.5) 40%,  rgb(255, 115,0,0.5) 70%, white 100%)',
        width: '100%',
        height: '100%',
        padding: '3rem 0',
        // border: '2px solid red',
      }}>
        <Carousel autoPlay={true} infiniteLoop={true} labels={false} showStatus={false} showIndicators={false} showArrows={false} interval={2000} showThumbs={false}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-5.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-1.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-6.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-8.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-9.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-7.jpg' alt="" style={sliderimgstyle} />
          </div>

        </Carousel>
        {/* <Slider {...settings}>
          <div style={{
            border: '2px solid red',
          }}>
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-5.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div >
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-1.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div >
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-6.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div >
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-8.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div >
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-9.jpg' alt="" style={sliderimgstyle} />
          </div>
        </Slider> */}
      </div>



      <div style={{
        fontSize: `${window.innerWidth > 600 ? '2rem' : '1.3rem'} `,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem auto',
        borderBottom: '2px solid #000',
        paddingBottom: '0.5rem',

        width: `${window.innerWidth > 900 ? 'fit-content' : '80%'} `,
      }}>
        <div>THIS IS THE IMPACT YOU HELPED US ACHIEVE.</div>

      </div>
      <div style={{ padding: '0 2rem' }}>
        <div className="maheshgallery-container" style={{
          padding: `${window.innerWidth > 900 ? '0 2rem' : '0 1em'} `,
        }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                cursor: 'pointer',

                // transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <img src={photo.src} alt="" style={{ width: '100%', height: '100%', maxWidth: '100%', transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease', }} />
              {hoveredIndex === index && showCaption && (
                <div className="caption"
                  style={{
                    position: 'absolute',
                    bottom: '0px', // Initial position below the image
                    left: '0px',
                    height: '100%', // Height set to accommodate the caption
                    width: '100%',
                    color: 'white',
                    fontSize: `${window.innerWidth > 900 ? '1.5rem' : '0.5rem'} `,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '4px 8px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <p style={{
                    padding: '1em',
                    margin: 'auto 0',
                    fontSize: `${window.innerWidth > 900 ? '1.5rem' : '1rem'} `,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    transition: 'all 3s ease',
                    lineHeight: '1.5',
                    // border: '2px solid #fff',
                    height: '100%',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>{photo.caption}</p>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', marginTop: '1.5em' }}>
        <img
          src="https://www.cry.org/wp-content/themes/cry/images/impact-banner-alt.jpg"
          alt=""
          style={{
            width: '100%',
            height: `${window.innerWidth > 900 ? '500px' : '300px'} `,
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            fontSize: `${window.innerWidth > 900 ? '2rem' : '1em'} `,
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            top: '45%', // Adjust this value to vertically center the text on the image
            left: '50%', // Adjust this value to horizontally center the text on the image
            transform: 'translate(-50%, -50%)', // Center the text both vertically and horizontally
            color: 'white',
            textShadow: '0 0 10px rgba(0, 0, 0)',

          }}
        >
          Become a reason for their
        </div>
        <div
          style={{
            fontSize: `${window.innerWidth > 900 ? '5rem' : '2rem'} `,
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            top: '55%', // Adjust this value to vertically center the text on the image
            left: '50%', // Adjust this value to horizontally center the text on the image
            transform: 'translate(-50%, -50%)', // Center the text both vertically and horizontally
            color: 'white',
            textShadow: '0 0 10px rgba(0, 0, 0)',
          }}
        >
          SMILE
        </div>
      </div>
      <div style={{
        fontSize: `${window.innerWidth > 600 ? '2rem' : '1.5rem'} `,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem auto',
        borderBottom: '2px solid #000',
        paddingBottom: '0.5rem',
        width: 'fit-content',
      }}>
        <div>Campaigns</div>

      </div>

      <GalleryComponent />
      {/* 
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <div className="story-img">
            <img src={story.img} alt="" />
          </div>
          <div className="story-content">
            <div className="story-name">{story.name}</div>
            <div className="story-text">{story.text}</div>
            <Button onClick={() => handleButton(story)}>Read More</Button>
          </div>
        </div>
      ))}
 */}


      <div style={{
        fontSize: `${window.innerWidth > 600 ? '2rem' : '1.3rem'} `,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '1rem auto',
        marginTop: '2rem',
        borderBottom: '2px solid #000',
        paddingBottom: '0.5rem',
        width: 'fit-content',
      }}>
        <div>STORIES OF CHANGE</div>

      </div>
      <div style={{
        background: 'linear-gradient(white 0%, rgb(255, 115,0,0.5) 40%,  rgb(255, 115,0,0.5) 50%, white 100%)',
        width: '100%',
        height: 'fit-content',
        margin: '0 0 3rem 0',
      }}>
        <Carousel autoPlay={true} infiniteLoop={true} labels={false} showStatus={false} showIndicators={false} showArrows={false} interval={2000} showThumbs={false}>
          {stories.map((story) => (
            <div className="maheshstory" key={story.id} style={{
              display: 'flex',
              flexDirection: `${window.innerWidth > 900 ? 'row' : 'column'}`,
              justifyContent: 'center',
              alignItems: 'flex-top',
            }}>
              <div className="" >
                <img src={story.img} alt="" style={sliderimgstyle2} />
              </div>
              <div className="" style={sliderdivstyle2} >
                <div className="story-name" style={{
                  padding: ' 0 0 0.5rem 0.5rem',
                  fontStyle: 'italic',
                  fontWeight: 'bold',

                }}>{story.name}</div>
                <div className="story-text" style={{
                  padding: ' 0 0.5rem',
                }}>{window.innerWidth > 900 ? truncateText(story.text, 55) : truncateText(story.text, 15)}</div>
                <Button onClick={() => handleButton(story)}>Read More</Button>
              </div>
            </div>
          ))}
        </Carousel>
        {/* <Slider {...settings2}>
          {stories.map((story) => (
            <div className="maheshstory" key={story.id} >
              <div className="" >
                <img src={story.img} alt="" style={sliderimgstyle2} />
              </div>
              <div className="" style={sliderdivstyle2} >
                <div className="story-name" style={{
                  padding: ' 0 0 0.5rem 0.5rem',
                  fontStyle: 'italic',
                  fontWeight: 'bold',

                }}>{story.name}</div>
                <div className="story-text" style={{
                  padding: ' 0 0.5rem',
                }}>{truncateText(story.text, 15)}</div>
                <Button onClick={() => handleButton(story)}>Read More</Button>
              </div>
            </div>
          ))}
        </Slider > */}
      </div >


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={Story.img} alt="" style={{
            width: `${window.innerWidth > 500 ? '100%' : '200px'}`,
            height: `${window.innerWidth > 500 ? '100%' : '200px'}`,
            margin: '0 auto',
          }} />
          <div style={{
            padding: `${window.innerWidth > 500 ? '0 2rem' : '0em'} `,
          }}>
            <Typography id="modal-modal-title" variant="h6" style={{
              fontSize: `${window.innerWidth > 500 ? '1em' : '0.5em'} `,
              width: `${window.innerWidth > 500 ? '100%' : '200px'}`,
              margin: '0 auto',
              textAlign: 'justify',
              fontStyle: 'italic',
              fontWeight: 'bold',
              padding: '0.5rem 0',
            }}>
              {Story.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{
              fontSize: `${window.innerWidth > 500 ? '1em' : '0.5em'} `,
              width: `${window.innerWidth > 500 ? '100%' : '200px'}`,
              margin: '0 auto',
              textAlign: 'justify',
            }}>
              {Story.text}
            </Typography>
          </div>
        </Box>
      </Modal>
    </>

  )
}

export default Gallery
