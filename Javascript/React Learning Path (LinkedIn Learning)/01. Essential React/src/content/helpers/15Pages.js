import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
          <Link to='about'>About</Link>
          <Link to='events'>Events</Link>
          <Link to='contact'>Contact</Link>          
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Inexistent404() {
    
    return (
      <div>
        <h1>[404 This Page "{useLocation().pathname}" doesn't exist]</h1>
      </div>
    );
  }