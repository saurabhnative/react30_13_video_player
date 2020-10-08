import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
function LaunchInfo() {
    const [launchData, updateLaunchData] = useState(null)
    useEffect(() => {
        fetchLaunchData()
    }, [])
    async function fetchLaunchData() {
        try {
            const request = await axios.get('https://api.spacexdata.com/v4/launches/latest')
            console.log(request.data);
            updateLaunchData(request.data);
        } catch (error) {
            console.log(error)
        }
    }
    function renderLaunchInfo() {
        if (launchData) {
            return (
                <div>
                    <div className="title h3">
                        {launchData.name} Video Steam
                    </div>
                    <div className="d-flex justify-content-center">
                        {/* <video width="80%" height="515px" controls>
                            <source src="/videos/rocketlaunch.mp4" type="video/mp4" />
                        </video> */}
                        {/* <iframe width="80%" height="515"
                            src={`https://www.youtube.com/embed/${launchData.links.youtube_id}`}>
                        </iframe> */}
                        <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${launchData.links.youtube_id}`} 
                            width="80%"
                            height="515px"
                            controls={true}
                        />
                    </div>
                    <div>
                        {launchData.details}
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="container mt-2">
            {renderLaunchInfo()}
        </div>
    );
}

export default LaunchInfo;
