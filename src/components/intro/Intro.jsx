import './Intro.scss';
import ITyped from 'react-ityped';

import { useEffect } from 'react';
import { useRef } from 'react';


const Intro = () => {

    const itypeRef = useRef();
    useEffect(() => {

        // init(itypeRef, { showCursor: true, strings: ['Use with React.js!', 'Yeah!'] })
        console.log(itypeRef)
    }, [])
    return (
        <div className='intro' id='intro'>



            <div className='left'>
                <div className="imageContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>HI There , I am</h2>
                    <h1>Ananda Gharami</h1>
                    <h3>Freelancer <ITyped ref={itypeRef}> Designer</ITyped> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>

        </div>
    );
};

export default Intro;