
import React, { useState } from 'react';
import './Scheduler.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Scheduler = () => {

const [isUpcomingOpen, setIsUpcomingOpen] = useState(false);
const [isPastOpen, setIsPastOpen] = useState(false);

const toggleUpcomingDropdown = () => {
  setIsUpcomingOpen(!isUpcomingOpen);
  if (isPastOpen) setIsPastOpen(false);
};

const togglePastDropdown = () => {
  setIsPastOpen(!isPastOpen);
  if (isUpcomingOpen) setIsUpcomingOpen(false);
};

const handleOptionClick = (option) => {
  console.log(`Selected: ${option}`);
};



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    purpose: ''
  });
  const [meetings, setMeetings] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      purpose: formData.purpose
    };
    setMeetings([...meetings, newMeeting]);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      purpose: ''
    });
    alert('Meeting scheduled successfully!');
  };

  const renderMeetingDetails = (date) => {
    const meetingsOnDate = meetings.filter((meeting) => meeting.date === formatDate(date));
    return meetingsOnDate.map((meeting, index) => (
      <div key={index} className="meeting-tooltip">
        <p><strong>{meeting.name}</strong></p>
        <p><strong>Time:</strong> {meeting.time}</p>
        <p><strong>Purpose:</strong> {meeting.purpose}</p>
      </div>
    ));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
    
    <div className='wrap'>
    <div className='con'>

    <div className='cont'>
    <h2>Meeting Log</h2>

    <div>
      <div className="dropdown">
        <button onClick={toggleUpcomingDropdown} className="dropdown-toggle">
          Upcoming Meetings
        </button>
        {isUpcomingOpen && (
          <ul className="dropdown-menu">
            <div className='meet'>
              <li onClick={() => handleOptionClick('Upcoming Option 1')}>
                <div className="meeting">
                  <p><strong>John Doe</strong></p>
                  <p><strong>Date:</strong> 2024-06-30</p>
                  <p><strong>Time:</strong> 10:00 AM</p>
                  <p><strong>Purpose:</strong> Project discussion</p>
                </div>
              </li>
              <li onClick={() => handleOptionClick('Upcoming Option 2')}>
                <div className="meeting">
                  <p><strong>John Doe</strong></p>
                  <p><strong>Date:</strong> 2024-06-30</p>
                  <p><strong>Time:</strong> 10:00 AM</p>
                  <p><strong>Purpose:</strong> Project discussion</p>
                </div>
              </li>
            </div>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={togglePastDropdown} className="dropdown-toggle">
          Past Meetings
        </button>
        {isPastOpen && (
          <ul className="dropdown-menu">
            <div className='meet'>
              <li onClick={() => handleOptionClick('Past Option 1')}>
                <div className="meeting">
                  <p><strong>Jane Smith</strong></p>
                  <p><strong>Date:</strong> 2024-05-20</p>
                  <p><strong>Time:</strong> 2:00 PM</p>
                  <p><strong>Purpose:</strong> Review</p>
                </div>
              </li>
              <li onClick={() => handleOptionClick('Past Option 2')}>
                <div className="meeting">
                  <p><strong>Jane Smith</strong></p>
                  <p><strong>Date:</strong> 2024-05-20</p>
                  <p><strong>Time:</strong> 2:00 PM</p>
                  <p><strong>Purpose:</strong> Review</p>
                </div>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
    
</div>
    
    </div>
<div className='line'></div>
      <div className='cont'>
    <div className="scheduler-container">

    
      <div className="scheduler-form">
        <h2>Schedule a Meeting</h2>
        <form onSubmit={handleSubmit}>
        <div className='wrapper'>
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          </div>
<div className='wrapper'>
          <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
                                <label htmlFor="phoneNo">Phone No</label>
                                <input type="tel" id="phoneNo" name="phoneNo" />
                            </div>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Meeting Agenda:</label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          
          
          
          <button type="submit">Schedule Meeting</button>
        </form>
      </div>
      <div className="scheduler-details">

      <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
      </div>
    </div>

    </div>
    </div>
    </>
  );
};

export default Scheduler;
