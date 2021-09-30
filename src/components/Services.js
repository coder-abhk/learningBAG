import ServiceSvgArrow from "../assets/images/services_arrow.svg";
import { useEffect, useRef } from "react";
function Services() {
  // getting dom elements
  const tabs = useRef(null);
  const notes = useRef(null);

  // tabs handler
  useEffect(() => {
    //  convert array like structure of tabs/notes in actual array list
    const tabsList = Array.prototype.slice.call(tabs.current.children);
    const notesList = Array.prototype.slice.call(notes.current.children);
    // setting functionality of each tabs
    tabsList.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        //  removal of .show || .active classes
        for (let i = 0; i < tabsList.length; i++) {
          notesList[i].classList.remove("show");
          tabsList[i].classList.remove("active");
        }
        //  setting classes
        tabsList[index].classList.add("active");
        notesList[index].classList.add("show");
      });
    });
  }, []);

  return (
    <section id="services" className="services-container">
      <div className="svg-arrow">
        <img className="service-svg-arrow" src={ServiceSvgArrow} alt="" />
      </div>
      <ul ref={tabs} className="tab-bar">
        <li className="tab-one tab active">hardcover</li>
        <li className="tab-two tab">softcover</li>
        <li className="tab-three tab">ebooks</li>
      </ul>
      <div ref={notes} className="notes">
        <p className="note show">
          One ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <p className="note">
          Two ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <p className="note">
          Three ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
      </div>
    </section>
  );
}

export default Services;
