import React, {useState} from 'react';
import SkeletonMan from './skeleton.svg';
import CircleButton from './circleButton.svg';
import './Skeleton.css';

{/* <span className="arrow"></span> */}

export function Skeleton() {
        const [sidebar, setSidebar] = useState(false)
        const [sideBarHip,setSideBarHip] = useState(false)
        const showSidebar = () => {
            setSideBarHip(false)
            setSidebar(!sidebar)
        }
        const showSidebarHip = () => {
            setSidebar(false)
            setSideBarHip(!sideBarHip)
        }
    return(
        <div>
            <div className={sidebar ? 'sidebar-menu-active' : 'sidebar-menu'}> 
                <div className='sidebar-toggle'>
                <a onClick={showSidebar}><h2 className="back"> &#8810;  Back</h2></a>
                    <h2 className="kneeMod">Knee Module</h2>
                    <a href="/Knee1Start" className="Case1">Case 1</a>
                    <a href="/Knee2Start" className="Case2">Case 2</a>
                    <a href="/Knee3Start" className="Case3">Case 3</a>
                    <h2 className="refMat">Reference Material</h2>
                    <a href="/History" className="history">History</a>
                    <a href="/PhysicalExam" className="physical">Physical Examination</a>
                    <a href="/DifferentialDiag" className="differential">Differential Diagnosis</a>
                </div>
            </div>

            <div className={sideBarHip ? 'sidebar-menu-active' : 'sidebar-menu'}> 
                <div className='sidebar-toggle'>
                <a onClick={showSidebarHip}><h2 className="back"> &#8810;  Back</h2></a>
                    <h2 className="kneeMod">Hip Module</h2>
                    <a href="/Hip1Start" className="Case1">Case 1</a>
                    <a href="/Hip2Start" className="Case2">Case 2</a>
                    <a href="/Hip3Start" className="Case3">Case 3</a>
                    <h2 className="refMat">Reference Material</h2>
                    <a href="/History" className="history">History</a>
                    <a href="/PhysicalExam" className="physical">Physical Examination</a>
                    <a href="/DifferentialDiag" className="differential">Differential Diagnosis</a>
                </div>
            </div>

            <view className="ButtonContainer">
                <img src={SkeletonMan} alt="Skeleton" className="skeleton"/>
                <a onClick={showSidebar}><img src={CircleButton} alt="Circle" className="skeletonButton"/></a>
                <a onClick={showSidebarHip}><img src={CircleButton} alt="Circle" className="skeletonButton2"/></a>
            </view>
        </div>

        
    )
}
export default Skeleton;