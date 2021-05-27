import React, {useState} from 'react';
import SkeletonMan from './skeleton.svg';
import CircleButton from './circleButton.svg';
import './Skeleton.css';

export function Skeleton() {
        const [sidebar, setSidebar] = useState(false)
        const showSidebar = () => setSidebar(!sidebar)
    return(
        <div>
        <div className={sidebar ? 'sidebar-menu-active' : 'sidebar-menu'}> inactive
            <div className='sidebar-toggle'></div>
        </div>
        <view className="Container">
            <img src={SkeletonMan} alt="Skeleton" className="skeleton"/>
            <a onClick={showSidebar}><img src={CircleButton} alt="Circle" className="skeletonButton"/></a>
        </view>
        </div>
    )
}
export default Skeleton;