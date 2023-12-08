import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// icons
import shuttle from "../../assets/shuttle.png";
import arrow from "../../assets/arrow.png";
import finish from "../../assets/finish1.png";
import done from "../../assets/done.png";
import thankYou from "../../assets/thank.png";
import StartedIcons from "./StartedIcons/StartedIcons";

const Started = () => {
  return (
    <section style={{backgroundImage:"url(https://assets-global.website-files.com/64e4a47477bc12449a13a52c/64ef828fa7b5db06ae374ac1_Mask%20Group%201.svg)",backgroundColor:"#F7F2F7",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} className="py-5 sm:py-10 mx-auto">
       <div className="text-center py-4 sm:py-12">
        <h2 className="text-3xl mb-2 font-semibold">Get Started</h2>
        <p>Let's get started</p>
      </div>
      <div className="react-timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#937B92", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #937B92" }}
            date="Step 1"
            iconStyle={{
              background: "#937B92",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<StartedIcons icon={shuttle} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Registration
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              Create an account to Car Resale
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#232F3C",
              color: "#232F3C",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            date="Step 2"
            icon={<StartedIcons icon={arrow} />}
            position="right"
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Purchase
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              Purchase a product by clicking purchase button. You will see a
              notification upon successful purchase.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#937B92", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #937B92" }}
            iconStyle={{
              background: "#937B92",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Step 3"
            icon={<StartedIcons icon={arrow} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Dashboard
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              Click Dashboard on the menu
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#232F3C", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            date="Step 4"
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            icon={<StartedIcons icon={arrow} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              My Orders
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              Select My Orders from Dashboard. You can see all your purchased
              products here
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#937B92", color: "#937B92" }}
            contentArrowStyle={{ borderRight: "7px solid  #937B92" }}
            iconStyle={{
              background: "#937B92",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Step 5"
            icon={<StartedIcons icon={arrow} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Pay or Delete
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              Click "pay" To complete payment <br />
              Or, click "delete" to delete your order
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#232F3C", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            date="Step 6"
            icon={<StartedIcons icon={finish} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Complete Payment
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              You can pay using any type of card (e.g. Visa card, Master Card,
              American Card etc)
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#937B92", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #937B92" }}
            date="Done"
            iconStyle={{
              background: "#937B92",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<StartedIcons icon={done} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl">
              Congratulations!
            </h3>
            <h3 className="text-white sm:text-xl pt-3">
              You have are all done. You will your TransactionId upon successful
              payment. You can also check it on My Orders.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#232F3C", color: "#232F3C" }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Pro Tips"
            icon={<StartedIcons icon={thankYou} />}
          >
             <h3 className="text-white sm:text-xl">
              Thank you for visiting us!
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Started;
