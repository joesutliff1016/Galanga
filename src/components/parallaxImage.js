import React, {Component} from 'react';
import {Parallax} from 'react-parallax';



class ParallaxImage extends Component {
  render() {

    return (
      <div>
      <Parallax

            bgImage={require('./images/p_image.jpg')}
            bgImageAlt="Thai Food!"
            strength={500}
        >

            <div style={{ height: '400px' }} />
        </Parallax>
      </div>


    );
  }
}


export default ParallaxImage;
