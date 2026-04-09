import LegalPage from '../components/LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 7, 2025">

      <div className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          Editopia ("we," "our," or "us") is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website or engage our services. Please read it carefully.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number when you reach out to us.</li>
          <li><strong>Project Materials:</strong> Files, footage, and assets you provide for the purpose of completing your project.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website.</li>
          <li><strong>Payment Information:</strong> Billing details processed securely through our payment provider — we do not store card data.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Deliver and manage the services you've requested.</li>
          <li>Communicate about your project, revisions, and deliverables.</li>
          <li>Process invoices and payments.</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Comply with applicable laws and regulations.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>4. How We Share Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties.
          We may share data with trusted service providers (e.g., payment processors, cloud storage)
          solely for the purpose of delivering our services, under strict confidentiality obligations.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to deliver our services and
          comply with legal obligations. Project files are typically deleted within 90 days of final
          delivery unless a longer retention period is agreed upon.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Right to access the personal data we hold about you.</li>
          <li>Right to correct inaccurate or incomplete data.</li>
          <li>Right to request deletion of your data ("right to be forgotten").</li>
          <li>Right to object to or restrict certain processing activities.</li>
          <li>Right to data portability.</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:privacy@editopia.com">privacy@editopia.com</a>.</p>
      </div>

      <div className="legal-section">
        <h2>7. Security</h2>
        <p>
          We implement industry-standard security measures including encryption, access controls,
          and secure data storage. However, no transmission over the internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          by posting the new policy on this page with an updated date. Continued use of our services
          after changes constitutes acceptance of the updated policy.
        </p>
      </div>

      <div className="legal-section">
        <h2>9. Contact</h2>
        <p>
          For privacy-related inquiries, contact us at{' '}
          <a href="mailto:privacy@editopia.com">privacy@editopia.com</a> or write to us at:
          Editopia, Los Angeles, CA 90001, United States.
        </p>
      </div>

    </LegalPage>
  );
}
