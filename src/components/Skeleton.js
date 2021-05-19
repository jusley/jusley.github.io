import React from 'react';
import SkeletonMan from '../skeleton.svg';
import CircleButton from '../circleButton.svg';
import './Skeleton.css';

export function Skeleton(props) {
    return(
        <view className="Container">
            <img src={SkeletonMan} alt="Skeleton" className="skeleton"/>
                <a href="#"><img src={CircleButton} alt="Circle" className="skeletonButton"/></a>
        </view>
    )
}

export default Skeleton;

