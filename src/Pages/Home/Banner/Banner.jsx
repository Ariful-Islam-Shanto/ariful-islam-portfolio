import React from 'react';
import arifulIslam from '../../../assets/Ariful Islam (1) (1).png'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import layoutGrid from '../../../assets/Golden Ratio (2).jpg';
import { TypeAnimation } from 'react-type-animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Banner = () => {
  

    const downloadResume = () => {
        // Google drive resume link
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1EuO4zFz03Pyo2Tltm6SW6elJv_XCp4fm';
      
        
        // Create an anchor element
        const link = document.createElement('a');
      
        // Set the href attribute to the file URL
        link.href = fileUrl;
      
        // Set the download attribute with the desired filename
        link.download = 'ResumeOfficial.pdf';
      
        // Append the anchor element to the document body
        document.body.appendChild(link);
      
        // Trigger a click on the anchor element to start the download
        link.click();
      
        // Remove the anchor element from the document
        document.body.removeChild(link);
      };

      const bg = {
        backgroundImage : `url(${layoutGrid})`,
        backgroundSize : 'cover'
      }

    return (
        <div style={bg} className=' xl:h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center justify-center py-8 border-b-2 border-[#03045E] '>

  
            <div className="flex-1 text-center md:text-left md:px-0 space-y-4">
                <p className='text-[#03045E] font-medium'>Hello, I'm Ariful Islam,</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl break-words font-bold leading-[70px] md:leading-[70px] lg:leading-[90px] xl:leading-[100px] text-[#03045E]'>
                    <TypeAnimation
      sequence={[
        'Junior', // Types 'One'
        1000, // Waits 1s
        'Web Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        // 'with MERN Stack Exposure', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  
    </h1>
                <p className='text-[#03045E] font-medium'>Transforming Ideas into Digital Realities with Innovation and Precision.</p>
                <AwesomeButton cssModule={'aws'} type="secondary"><a onClick={downloadResume}>Resume</a></AwesomeButton>
            </div>
            <div className="flex-1 h-full">
                <img src={arifulIslam} alt="" className=' object-cover h-full w-full bg-bottom'/>
            </div>
        </div>
    );
};

export default Banner;