import skull from './assets/green_skull.png';
import man from './assets/pink_man.png';
import iSSlogo from './assets/logo.png';
import {Animated} from "react-animated-css";
import './App.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Story() {
  const [visible, setVisible] = useState(false);
  setTimeout(() => setVisible(true), 650);
  return (
    <div className="App">
      <div id='bg-container' className='flex flex-col h-screen'>
        <div className='my-8 mx-32'>
        <Animated animationIn="slideInDown" animationOut="slideOutUp" isVisible={visible}>
            <div className='flex justify-between items-center'>
              <Link to="/" > <img src={iSSlogo} className='h-24' ></img></Link>
              <a href='' className='text-white text-2xl drop-shadow-lg font-alphaEcho'>Connect Wallet</a>
            </div>
            </Animated>
        </div>
        <div className='flex justify-between items-end flex-grow w-full'>
          <div className='flex items-end w-full px-16'>

          <img src={man} alt='Man' className='h-192'></img>

            
                <div className='flex flex-row flex-grow justify-center h-192 items-center'><div className='p-8 h-172 no-scrollbar overflow-scroll'><h1 className='text-white font-alphaEcho text-4xl'>Story</h1>
                
                <p className='font-aveny text-white text-clip mt-8'>Zoople has two bodies, his human half, and his phantom half - he also has more than one presence in each dimension, often meeting with himself during unpredictable time-shifts.

His human half appears unscathed, although, it will show some weird characteristics depending on what dimension Zoople is present in and adapted to.

His phantom half consists of all kinds of matter forming the shape of a skull.

None of Zoople's bodies can feel nor communicate with either half, yet they manage to work together in tandem.

The question is which side has more control over the other and what are their goals?

No-one is really sure how Zoople came to exist, as even his existence in and of himself is contradictory and nonsensical; the combination of the living and the unexplainable seems like nothing more than a myth. 

In the absence of any definitive facts, theories on the origins of the 'Indie Skull Syndicate' (what all Zoople's collectively refer to themselves as, for some weird reason) are extremely popular and abundant, if you ever ask him.

Some think they're the result of some wicked necromantic ritual gone wrong. Others say that they might be the creations of some transient deity. Or they will believe they have been sent somewhere as punishment.

Regardless of where this mysterious wanderer came from and where he is, it doesn't change the fact that his mere existence is a wonder on its own.

Zoople will regularly encounter himself. Some of the meetings end in friendship, others in aggression. The sad thing is, they don't last forever and no matter what happens - each limbo will be returned to their own dimension at any time to wait for another time shift, wander their world and hope their bodies will continue to get along.

Chances of the same Zoople's meeting again? How long is a piece of string?  More importantly, how many dimensions are there? All we know is if a Zoople did ever manage to meet himself more than once, if they don't kill each other... they might just end up getting onto something.

Is this what the Indie Skull Syndicate is meant to do? Why do they call themselves this and what will they discover? 

There's only one way to find out and that is by joining the syndicate yourself and embarking on your journey with your own Zoople.</p>
</div>
                </div>
            

          <img src={skull} className='h-192'></img>
          
          </div>
        </div>
     </div>
    </div>
  );
}

export default Story;
