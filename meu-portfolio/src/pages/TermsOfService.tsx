import LegalPage from '../components/LegalPage';

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="April 7, 2025">

      <div className="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using any services provided by Editopia ("Company," "we," "us," or "our"),
          you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
          please do not use our services. These Terms apply to all visitors, users, and others who access
          or use our services.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Description of Services</h2>
        <p>
          Editopia provides professional video editing, motion design, and creative direction services.
          Our offerings include but are not limited to short-form content production, cinematic editing,
          color grading, sound design, and full post-production workflows. The exact scope of services
          will be defined in a separate project agreement or statement of work.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>Provide all source materials (footage, audio, assets) in agreed formats and within agreed timelines.</li>
          <li>Ensure you own or have the rights to all materials submitted for editing.</li>
          <li>Provide timely feedback within the revision window specified in your project agreement.</li>
          <li>Make payments according to the schedule outlined in your invoice or contract.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>4. Intellectual Property</h2>
        <p>
          Upon receipt of full payment, all final deliverables and edited content are transferred to the
          client. Editopia retains the right to display completed work in its portfolio, showreel, and
          marketing materials unless otherwise agreed in writing. Source project files, presets, and
          proprietary assets remain the exclusive property of Editopia.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Revisions and Approvals</h2>
        <p>
          Each project includes a defined number of revision rounds as specified in the project proposal.
          Additional revisions beyond the agreed scope will be billed at our standard hourly rate.
          Client approval at each milestone is required before advancing to the next phase of production.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Payment Terms</h2>
        <p>
          A deposit of 50% of the total project fee is required before work begins. The remaining balance
          is due upon delivery of final files. Late payments may incur a 1.5% monthly fee. Editopia
          reserves the right to withhold final deliverables until payment is received in full.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Limitation of Liability</h2>
        <p>
          Editopia's liability is limited to the total amount paid by the client for the specific project
          in question. We are not liable for any indirect, incidental, consequential, or punitive damages
          arising from the use of our services, deliverables, or this website.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Termination</h2>
        <p>
          Either party may terminate a project agreement with written notice. In the event of client
          termination, fees for all work completed up to the termination date are non-refundable.
          Editopia may terminate an agreement if the client breaches these Terms or fails to make payment.
        </p>
      </div>

      <div className="legal-section">
        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of
          California, United States. Any disputes shall be subject to the exclusive jurisdiction of
          the courts located in Los Angeles County, California.
        </p>
      </div>

      <div className="legal-section">
        <h2>10. Contact</h2>
        <p>
          For questions regarding these Terms, please contact us at{' '}
          <a href="mailto:legal@editopia.com">legal@editopia.com</a>.
        </p>
      </div>

    </LegalPage>
  );
}
