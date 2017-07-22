import React from 'react';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import {
  ContactSection, CloudAccess, AboutSection, HeaderSection
} from './widgets';

const Landing_Page= () => (
  <div>
    <HeaderSection />

    <ScrollableAnchor id="scroll_about">
      <section id="about">
        <AboutSection />
      </section>
    </ScrollableAnchor>

    <ScrollableAnchor id="scroll_cloudaccess">
      <section  id="cloudaccess">
        <CloudAccess />
      </section>
    </ScrollableAnchor>

    <ScrollableAnchor id="scroll_contact">
      <section id="contact">
        <ContactSection />
      </section>
    </ScrollableAnchor>
  </div>
);

export default Landing_Page;
