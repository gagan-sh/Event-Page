/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../App.css';
import { DatePickerComponent, TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import ColorItem from '../color-items';
import c1 from '../Image/rat1.jpg';

export default function Product() {

  const colors = ['#6ab04c','#4834d4','#be2edd','#f9ca24'];

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color)
  }

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');

    setTheme(currentColor)

    console.log(currentColor);
  }

  return (
    <div className="container-fluid">
      <div className="navbar">
        <a className="navItem" href=""><span><i className="fa-solid fa-ticket me-2"></i>Events</span></a>
        <a className="navItem" href=""><span><i className="fa-regular fa-calendar-days me-2"></i>Calendars</span></a>
        <a className="navItem" href=""><span><i className="fa-regular fa-compass me-2"></i>Explore</span></a>
      </div>
      <div className="container pb-4">
        <div className="row">
          <div className="col-6 mt-3 ps-4">
            <div className="row">
              <div className="col-2">
                <img className="img1" src={c1} alt="user" />
              </div>
              <div className="col-10">
                <p className="m-0 text-secondary">Create Under <span className="ms-5 ps-5"><i class="fa-solid fa-caret-down ms-5"></i></span></p>
                <h5 className="m-0">Personal Calendar</h5>
              </div>
            </div>
            <input type="text" className="event-name mt-4 mb-3" placeholder='Event Name' />
            <div className="row">
              <div className="col-2">
                <button className="cal-icon mt-3"><i class="fa-solid fa-calendar-week fa-2xl"></i></button>
              </div>
              <div className="col-10">
                <div className="card date-time-card">
                  <div className="row">
                    <div className="d-label">Start
                      <span className="d-input ps-3 pe-3">
                        <DatePickerComponent></DatePickerComponent>
                      </span>
                      <span className="t-input ps-3 pe-3">
                        <TimePickerComponent></TimePickerComponent>
                      </span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="d-label">End
                      <span className="d-input ps-3 pe-3">
                        <DatePickerComponent></DatePickerComponent>
                      </span>
                      <span className="t-input ps-3 pe-3">
                        <TimePickerComponent></TimePickerComponent>
                      </span>
                    </div>
                  </div>
                  <div className="row timezone text-secondary mt-4">
                    <span>
                      <i class="fa-solid fa-globe me-4"></i>
                      GMT + 05:30 Calcutta
                    </span>
                  </div>
                  <hr></hr>
                  <div className="row timezone text-secondary">
                    <span>
                      <i class="fa-solid fa-layer-group me-4"></i>
                      Create Multi-Session Event
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2 mt-4">
                <button className="cal-icon"><i class="fa-solid fa-location-dot fa-2xl"></i></button>
              </div>
              <div className="col-10">
                <div className="card date-time-card">
                  <div className="l-name">
                    Add Event Location
                  </div>
                  <div className="timezone text-secondary">
                    Offline Location or Virtual Link
                  </div>
                </div>
              </div>
            </div>
            <h5 className='mt-5'>Event Options</h5>
            <div className="card date-time-card">
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-ticket me-3"></i>Tickets <span className="float-end">Free <span><i class="fa-solid fa-pen ms-3"></i></span></span></span>
              </div>
              <hr></hr>
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-user-check me-3"></i>Require Approval <span className="float-end"><label class="switch">
                  <input type="checkbox"/>
                    <span class="slider round"></span>
                </label></span></span>
              </div>
              <hr></hr>
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-arrow-up-from-bracket me-3"></i>Capacity <span className="float-end">Unlimited <span><i class="fa-solid fa-pen ms-3"></i></span></span></span>
              </div>
              <hr></hr>
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-globe me-3"></i>Visibility <span className="float-end">Public <span><i class="fa-solid fa-square-caret-down ms-3"></i></span></span></span>
              </div>
            </div>
            <button className="btn btn-dark w-100">Create Event</button>
          </div>
          <div className="col-6 mt-3">
            <div className="row theme-body ms-2 me-2 mt-2 mb-4">
              YOU ARE INVITED
            </div>
            <h5>Themes</h5>
            <div className="row">
              <div className="color-list mt-5">
                {colors.map((color) => <ColorItem setColor={setColor} color={color} />)}
              </div>
            </div>
            <div className="card date-time-card mt-5">
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-circle me-3"></i>Color <span className="float-end">Gray <span><i class="fa-solid fa-square-caret-down ms-3"></i></span></span></span>
              </div>
              <hr></hr>
              <div className="row">
                <span className="event-option-rows text-secondary"><i class="fa-solid fa-paragraph me-3"></i>Typeface <span className="float-end">Default <span><i class="fa-solid fa-square-caret-down ms-3"></i></span></span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
