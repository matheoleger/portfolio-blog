import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TimelineItem from "./TimelineItem"
import '../../../css/timelineList.css'

function TimelineList({linkToApi}) {

    const [timelineItemList, setTimelineItemList] = useState([]);

    useEffect(() => {
        axios.get(linkToApi).then((response) => {
            console.log(response.data)
            setTimelineItemList(response.data)})
    }, [])

    return (
        <div className="timeline-list">
        {
            timelineItemList.map((experience, key) => (
                <TimelineItem key={key} {...experience}/> 
            ))
        }
        </div>
    )
}

export default TimelineList