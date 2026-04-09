import LegalPage from '../components/LegalPage';

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="April 7, 2025">

      <div className="legal-section">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device by a website you visit. They are widely
          used to make websites work more efficiently, remember your preferences, and provide analytical
          data to site owners. Cookies do not access or store any personally identifiable information
          beyond what you provide.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. How We Use Cookies</h2>
        <p>Editopia uses cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly. These cannot be disabled.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., pages visited, time on site). We use anonymized data only.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and choices to improve your experience on return visits.</li>
          <li><strong>Performance Cookies:</strong> Monitor website performance and help us identify and fix issues.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies may be set by third-party services embedded in our website (e.g., embedded video
          players, analytics tools). These third parties have their own privacy policies, and Editopia
          does not control them. We recommend reviewing those policies separately.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View what cookies are stored and delete individual cookies.</li>
          <li>Block third-party cookies.</li>
          <li>Block all cookies from being set.</li>
          <li>Delete all cookies when you close your browser.</li>
        </ul>
        <p>
          Please note that disabling cookies may affect the functionality of our website and your
          overall experience. Instructions for popular browsers can be found at their respective
          support pages.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Cookie Duration</h2>
        <ul>
          <li><strong>Session Cookies:</strong> Deleted automatically when you close your browser.</li>
          <li><strong>Persistent Cookies:</strong> Remain on your device until they expire or are manually deleted. Our persistent cookies expire within 12 months.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy as our services evolve or regulations change. Any updates
          will be reflected on this page with a revised date. We encourage you to review this policy
          periodically.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Contact</h2>
        <p>
          If you have questions about our use of cookies, please contact us at{' '}
          <a href="mailto:privacy@editopia.com">privacy@editopia.com</a>.
        </p>
      </div>

    </LegalPage>
  );
}
