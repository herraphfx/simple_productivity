import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../../images/feature_1.png';
import featureimage1 from '../../images/feature_2.png';
import featureimage2 from '../../images/feature_3.png';


function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox 
            image={featureimage} 
            title='Task Management'
            description='A good plan today is better than a perfect plan tomorrow.'
            />
            <FeatureBox 
            image={featureimage1} 
            title='Notes'
            description='There are no wrong notes'
            />
            <FeatureBox 
            image={featureimage2} 
            title='Priority'
            description='Root of productivity is priority'
            />
        </div>
    </div>
  )
}

export default Feature