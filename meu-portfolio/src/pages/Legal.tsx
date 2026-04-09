import LegalPage from '../components/LegalPage';

export default function Legal() {
  return (
    <LegalPage title="Legal Notice" lastUpdated="April 7, 2025">

      <div className="legal-section">
        <h2>Company Information</h2>
        <p>
          Editopia is a creative studio based in Los Angeles, California, United States,
          specializing in professional video editing, motion design, and post-production services.
        </p>
        <ul>
          <li><strong>Studio Name:</strong> Editopia</li>
          <li><strong>Location:</strong> Los Angeles, CA 90001, United States</li>
          <li><strong>Email:</strong> <a href="mailto:hello@editopia.com">hello@editopia.com</a></li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>Copyright Notice</h2>
        <p>
          All content on this website — including text, graphics, video reels, project showcases,
          design elements, and code — is protected by copyright law and is the exclusive intellectual
          property of Editopia, unless otherwise stated. © {new Date().getFullYear()} Editopia. All rights reserved.
        </p>
        <p>
          Unauthorized reproduction, distribution, modification, or display of any content from this
          website is strictly prohibited without prior written consent from Editopia.
        </p>
      </div>

      <div className="legal-section">
        <h2>Trademark</h2>
        <p>
          The name "Editopia," the Editopia logo, and all associated brand identity elements are
          trademarks of Editopia. Unauthorized use of our trademarks — including in domain names,
          social media handles, or commercial products — is not permitted.
        </p>
      </div>

      <div className="legal-section">
        <h2>Disclaimer of Warranties</h2>
        <p>
          This website and its content are provided "as is" without warranty of any kind, either
          express or implied. Editopia makes no representations or warranties regarding the accuracy,
          completeness, or suitability of the information presented. We reserve the right to modify
          or remove content at any time without notice.
        </p>
      </div>

      <div className="legal-section">
        <h2>External Links</h2>
        <p>
          Our website may contain links to third-party websites. These links are provided for
          informational purposes only. Editopia has no control over the content, privacy practices,
          or availability of external sites and accepts no responsibility for them.
        </p>
      </div>

      <div className="legal-section">
        <h2>DMCA Notice</h2>
        <p>
          If you believe that any content on this website infringes your copyright, please contact
          us at <a href="mailto:legal@editopia.com">legal@editopia.com</a> with the following:
        </p>
        <ul>
          <li>A description of the copyrighted work you claim has been infringed.</li>
          <li>The URL or location of the allegedly infringing content on our site.</li>
          <li>Your contact information (name, address, email, phone).</li>
          <li>A statement that the information is accurate and that you are authorized to act on behalf of the copyright owner.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>Applicable Law</h2>
        <p>
          This Legal Notice is governed by the laws of the State of California, United States.
          Any disputes arising from the use of this website shall be brought before the competent
          courts of Los Angeles County, California.
        </p>
      </div>

      <div className="legal-section">
        <h2>Contact</h2>
        <p>
          For legal inquiries, please contact <a href="mailto:legal@editopia.com">legal@editopia.com</a>.
        </p>
      </div>

    </LegalPage>
  );
}
