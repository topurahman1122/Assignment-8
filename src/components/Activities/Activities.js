import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import Activity from '../Activity/Activity';
import './Activities.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Articles from '../Articles/Articles';

const displayMsg = () => {
    toast("Congratulation! Your activity completed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const Activities = () => {
    const [activities, setActivites] = useState([]);
    const [time, setTime] = useState([]);
    // const [btime, setbTime] = useState([]);

    useEffect(() => {
        fetch('activities.JSON')
            .then(res => res.json())
            .then(data => setActivites(data));
    }, [])

    const handleAddToList = (activity) => {
        const newTime = [...time, activity];
        setTime(newTime);
    }

    let total = 0;
    for (const activity of time) {
        total = total + activity.time;
        console.log(total);
    }

    const breakTime = (bTime) => {
        const restDuration = document.getElementById('break-time');
        restDuration.innerText = bTime;
        localStorage.setItem('breakTime', JSON.stringify(bTime));

    }

    const [bTime, setItems] = useState([]);

    useEffect(() => {
        const bTime = JSON.parse(localStorage.getItem('breakTime'));
        if (bTime) {
            setItems(bTime);
            const restDuration = document.getElementById('break-time');
            restDuration.innerText = bTime;
        }

    }, [bTime]);

    return (
        <div className="main-section">
            <div className='activities-section'>
                <img src={logo} alt="" />
                <h3>Select today's exercise</h3>
                <div className="card-section">

                    <div className='activities'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToList={handleAddToList}
                            ></Activity>)
                        }
                    </div>
                </div>
                <Articles></Articles>
            </div>

            <div className="about-me">
                <div className='name-img'>
                    <div>
                        <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />
                    </div>
                    <div className='name'>
                        <h4>Mejanur Rahman</h4>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='body-info'>
                    <div>
                        <h2>70<span>kg</span></h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5.5<span>fit</span></h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>39<span>yrs</span></h2>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add A Break</h4>
                <div className='break-time'>
                    <div className='time'>
                        <button onClick={() => breakTime('5 Minutes')} >5<span>m</span></button>
                    </div>
                    <div className='time'>
                        <button onClick={() => breakTime('15 Minutes')} >15<span>m</span></button>
                    </div>
                    <div className='time'>
                        <button onClick={() => breakTime('20 Minutes')} >20<span>m</span></button>
                    </div>
                    <div className='time'>
                        <button onClick={() => breakTime('25 Minutes')} >25<span>m</span></button>
                    </div>
                    <div className='time'>
                        <button onClick={() => breakTime('30 Minutes')} >30<span>m</span></button>
                    </div>
                </div>

                <h4>Add A Break</h4>
                <div className='total-time'>
                    <h4>Exercise Time</h4>
                    <p>{total} Minutes</p>
                </div>
                <div className='total-time'>
                    <h4>Break Time</h4>
                    <p id='break-time' >0 Minutes</p>
                </div>
                <button onClick={displayMsg}>Activity Completed</button>

                <ToastContainer position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div>

        </div>

    );
};





export default Activities;