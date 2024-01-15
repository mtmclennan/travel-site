"use client";

import { Fragment } from "react";

import Image from "next/legacy/image";
import logo from "../../../public/assets/Black logo - no background.svg";

const About = () => {
  return (
    <Fragment>
      <section className="contact-hero__section">
        <div className="contact-hero">
          <div className="min-w-96">
            <Image src={logo} alt="Arvacay logo" layout="responsive" />
          </div>
        </div>
      </section>
      <section className="about-content__container">
        <h2 className="text-center">
          Your Ultimate Travel Planning Companion!
        </h2>
        <h3>🚗✈️🌍</h3>
        <h3>About Us</h3>
        <p>
          Greetings, fellow travel enthusiasts! We&apos;re thrilled to have you
          on board at Arvacay, where the journey is just as important as the
          destination. If you&apos;re passionate about exploring new places,
          seeking adventure, and making the most of your travels, you&apos;ve
          landed in the right spot.
        </p>
        <h3>Our Mission</h3>
        <p>
          At Arvacay, our mission is simple - we want to make your travel
          experiences unforgettable. Whether you&apos;re embarking on an epic
          road trip, planning a budget-friendly getaway, or searching for the
          perfect accommodation, we&apos;ve got you covered. Our dedicated team
          of wanderers and travel aficionados is here to share insider tips,
          expert advice, and inspiration to ensure your trips are nothing short
          of amazing.
        </p>
        <h3>What Sets Us Apart</h3>
        <p>
          <strong>1. Road Trip Revelations: </strong>
          Buckle up for the ride of a lifetime! We specialize in road trip tips
          and advice that go beyond the ordinary. From scenic routes to hidden
          gems, we&apos;ll help you navigate the open road with confidence and
          excitement.
        </p>
        <br></br>
        <p>
          <strong>2. Budget-Friendly Bliss:</strong>
          At Arvacay, we believe that memorable travel doesn&apos;t have to
          break the bank. Discover practical ways to save money without
          compromising on the quality of your adventures. Your dream vacation is
          closer than you think!
        </p>
        <br></br>
        <p>
          <strong>3. Accommodation Awaits:</strong>
          Finding the perfect place to stay is a crucial part of any journey.
          We&apos;ve scoured the globe to bring you the best recommendations,
          from cozy bed-and-breakfasts to luxury resorts. Rest easy knowing you
          have a home away from home on every escapade.
        </p>
        <h3>Join the Adventure</h3>
        <p>
          Ready to elevate your travel game? Dive into our blog posts, where
          you&apos;ll find a treasure trove of travel guides, insightful
          articles, and firsthand accounts from our team. Be part of our
          community by connecting with fellow travelers, sharing your
          experiences, and gaining valuable insights to plan your next big
          adventure. Thank you for choosing Arvacay as your go-to travel
          companion. Here&apos;s to a world full of exploration, laughter, and
          unforgettable moments!
          <br></br>
          <br></br>
          <strong>Happy travels!</strong>
        </p>
      </section>
    </Fragment>
  );
};

export default About;
