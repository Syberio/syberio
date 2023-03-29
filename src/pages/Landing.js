import React from "react";
import landingfirst from '../components/assets/landing-first.png'
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import ModalCard from "../components/sections/ModalCard";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Security concepts, simplified."
        subtitle="Feeling lost while learning? Do you get bored trying to learn from a plain text over and over? If your answer is a yes, then you have come to the right place. Syberio will teach you the security concepts you always needed, interactively. And the best part is, it's FUN!! "
        image={landingfirst}
        ctaText="Create your account now"
        ctaLink="/signup"
        ctaTry="Try for free!"
        ctaTryLink="/try" 
      />
    </LandingLayout>
  );
}