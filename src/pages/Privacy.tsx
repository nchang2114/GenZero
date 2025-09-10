import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy — GenZero'
  }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Legal</div>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="muted">Last Updated: August 8, 2025</p>
          <div className="spacer-40"/>

          <p className="muted">
            We highly value your privacy. This Privacy Policy (the “Policy”) sets out how we collect, use and protect
            your personal data (also known as personal information in certain jurisdictions) when you access, use and
            play games, features, content and services related to our games, related websites and other online services
            (the “Services”). We act as the controller (or a similar role) responsible for handling your personal data
            under this Policy. Please read and understand this Policy carefully before using our Services so that you can
            better understand our Services and make appropriate choices.
          </p>
          <p className="muted">
            You can review this Policy and adjust your privacy settings through the in‑game settings interface at any
            time. If you are in any doubt, please contact us as described in Section 9 “Contact Us” below.
          </p>

          <h3>This Policy Covers</h3>
          <ul>
            <li>What Personal Data We Collect</li>
            <li>How We Use Your Personal Data</li>
            <li>How We Share Your Personal Data</li>
            <li>International Transfer of Data</li>
            <li>Data Security and Data Retention</li>
            <li>Your Legal Rights</li>
            <li>Children’s Privacy</li>
            <li>Changes to this Policy</li>
            <li>Contact Us</li>
          </ul>

          <h3>1. What Personal Data We Collect</h3>
          <p className="muted">
            We may collect personal data when you use our Services. Personal data usually means any information relating
            to an identified or identifiable natural person. An identifiable natural person usually refers to the one who
            can be identified, directly or indirectly, in particular by reference to an identifier of that natural person.
          </p>
          <p className="muted">
            Please note that the data we list in this Policy may not constitute personal data according to the applicable
            data protection law. The personal data should be read and interpreted in the light of, and shall not be
            interpreted in a way that runs counter to, the rights and obligations provided for in the applicable data
            protection law.
          </p>
          <p className="muted">
            Personal data does NOT include “anonymized” data, which is data we collect about the use of the Service or
            about a group or category of products, services or users, or other data from which individual identities or
            other personal data has been removed so that the individual concerned cannot be identified directly or
            indirectly. Such data helps us understand trends and our users’ needs so that we can better consider new
            features or otherwise tailor our Service. This Policy in no way restricts or limits our collection and use of
            such data. However, if we combine or connect aggregated data with your personal data so that it can directly
            or indirectly identify you, we will treat the combined data as personal data which will be used in accordance
            with this Policy.
          </p>
          <p className="muted">
            We may collect data that you voluntarily provide to us, data that we collect automatically through your use of
            the Services, and certain data we obtain from third‑party sources.
          </p>

          <h3>1.1 Personal Data You Provide to Us</h3>
          <p className="muted">When you interact with our Services, you may provide us with the following types of data:</p>
          <ul>
            <li>
              Advertising Preferences Data. If you authorize us to collect your advertising ID (e.g., IDFA), we may use
              it to provide more relevant advertising experiences.
            </li>
            <li>
              Customer Service Data. When you contact us for support or feedback, participate in activities or surveys
              held by us, or subscribe to information push, we may collect your information, which may include your name,
              email address, delivery address, and any additional details you provide to us. The specific personal data
              collected shall be subject to the relevant interface display or communication with you.
            </li>
          </ul>

          <h3>1.2 Personal Data We Collect Automatically</h3>
          <p className="muted">When you use our Services, we automatically collect certain information. This includes:</p>
          <ul>
            <li>
              Identifiers Data. This includes your device identifiers (e.g., IDFV, Android ID, Google AID), and your IP
              address. Approximate location may be inferred from IP address.
            </li>
            <li>
              Device and Technical Data. This includes your device model, CPU information, storage size, screen size,
              network type, device country, device language, operating system version, device timezone, and other
              technical information.
            </li>
            <li>
              Usage Data. Information about how you interact with our Services, including game events, scores, session
              duration, interactions and other gameplay information.
            </li>
            <li>
              Advertising Data. Information related to the ads and the advertising interactions, such as ads displayed,
              visible time period, ad size, impressions, clicks, and conversions. This data helps measure advertising
              effectiveness.
            </li>
          </ul>

          <h3>1.3 Personal Data We Receive from Third Parties</h3>
          <ul>
            <li>
              Social Media Platforms. When you choose to log in with a third‑party account (for example, a Google
              account), we use the account verification service provided by it and may receive necessary information such
              as login code (encrypted) and login status to enable account functionality. Your use of any third‑party
              solution for sign‑up, and the personal data you provide to that third party or data collected by them, will
              be explained by that third party and governed by their terms and privacy policies. See, for example,
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Google’s Privacy Policy</a>.
            </li>
            <li>
              App Marketplaces. When you make in‑app subscriptions through an app marketplace (e.g., Apple App Store,
              Google Play), we may receive device ID, payment time, payment order (encrypted), and payment status. Payment
              transactions for in‑app subscriptions are completed through your app marketplace account. We do not process
              payments for in‑app subscriptions, nor do we have access to your credit card information.
            </li>
          </ul>

          <h3>1.4 No Special Categories of Personal Data</h3>
          <p className="muted">
            Certain categories of personal data, such as details about your race or ethnicity, religious or philosophical
            beliefs and so on, are considered more sensitive in certain jurisdictions and require a higher level of
            protection. To clarify, our Services do not collect any of those special categories of personal data.
          </p>

          <h3>2. How We Use Your Personal Data</h3>
          <p className="muted">
            We process your personal data for specific purposes and process only the personal data relevant for achieving
            that purpose.
          </p>
          <h3>2.1 To Provide, Maintain and Perform Our Services</h3>
          <ul>
            <li>Deliver our games, ensure they function correctly on your device, provide updates, and fix bugs or crashes.</li>
            <li>Verify in‑game subscriptions to facilitate your subscription.</li>
            <li>Provide account login, verification and management to achieve the account functionality you request.</li>
            <li>Operate activities you choose to participate in, including reward distribution per the activity rules.</li>
          </ul>

          <h3>2.2 To Enhance Game Performance and User Experience</h3>
          <ul>
            <li>
              Analyze personal data to improve stability, security, and overall performance, understand interactions,
              identify areas for improvement, and enhance overall user experience.
            </li>
            <li>
              Analyze trends, preferences, and interactions to make data‑driven decisions, develop new features, and
              tailor the experience.
            </li>
          </ul>

          <h3>2.3 To Push Our Services Information by Groups</h3>
          <p className="muted">
            Send information related to our Services, such as testing invitations, basic update instructions, or new
            features that may interest you.
          </p>

          <h3>2.4 To Provide Customer Support and Respond to Inquiries</h3>
          <p className="muted">
            Provide timely and accurate customer support, respond to inquiries, and handle complaints or feedback.
          </p>

          <h3>2.5 To Ensure Security and Compliance with Legal Obligations</h3>
          <p className="muted">
            Enhance the safety and security of our games, detect and prevent fraud, comply with legal requirements,
            verify identity, protect accounts, manage consent, and ensure our Services are used in accordance with
            applicable laws and regulations.
          </p>

          <h3>2.6 To Deliver Advertising and Marketing Communications</h3>
          <ul>
            <li>Deliver advertisements within our games and measure their effectiveness (general and personalized).</li>
            <li>Promote our games through other apps or online services.</li>
          </ul>

          <h3>2.7 To Administer Surveys and Other Activities</h3>
          <p className="muted">
            Participation is voluntary, and consent will be obtained where required by law.
          </p>

          <p className="muted">
            We only process your personal data when there is a legal basis permitted by the applicable law. The legal
            basis will depend on the context and purpose.
          </p>
          <p className="muted">
            If you reside in the EEA, we process personal data relating to your use of our Services when one of the
            following applies:
          </p>
          <ul>
            <li>
              Contractual necessity: necessary to enter into or perform a contract (applies to Section 2.1: Provide,
              Maintain and Perform Our Services).
            </li>
            <li>
              Legitimate interests: to operate and improve our business where not overridden by your interests or
              fundamental rights and freedoms (applies to Sections 2.2, 2.3, 2.4, 2.5, and certain processing in 2.6 as
              described on our CMP).
            </li>
            <li>
              Fulfillment of legal obligation: to comply with legal requirements (applies to Section 2.5).
            </li>
            <li>
              Consent: where required and in limited circumstances (applies to Sections 2.6 and 2.7). You may withdraw
              consent at any time without affecting processing already performed based on consent.
            </li>
            <li>Other: as permitted by applicable law.</li>
          </ul>

          <h3>3. How We Share Your Personal Data</h3>
          <p className="muted">
            To provide more convenient and prompt services, we may share your personal data with partners or engage
            processors (and/or sub‑processors) to process your personal data for the purposes in this Policy, subject to
            appropriate confidentiality and security obligations. We will not disclose your personal data to third
            parties unless we have obtained your consent or there are other legal bases for such sharing.
          </p>
          <p className="muted">We may share your personal data with the following categories of third parties:</p>
          <ul>
            <li>Our affiliates, as necessary to provide Services or for IT maintenance and operations.</li>
            <li>
              Technical service providers, including storage, crash analysis, messaging, privacy/consent management, and
              similar functions.
            </li>
            <li>
              Advertising partners, to recognize your device, serve ads, and measure effectiveness; data may include
              device identifiers (GAID/IDFA), IP address, and device/service context.
            </li>
          </ul>
          <p className="muted">
            These providers may use APIs, SDKs, cookies or similar technologies to collect information about your device
            and your Service use. We use a CMP to manage consent and require partners to process personal data according
            to the permissions provided. These partners may process your data under their own privacy policies. For
            further information, see the Appendix — Advertising Partners List. To withdraw consent or opt‑out from
            advertising‑related matters, see Section 6 “Your Legal Rights”.
          </p>
          <p className="muted">
            We may also disclose personal data if we sell, transfer or merge parts of our business or assets (the new
            owner will assume our rights and obligations in this Policy), or where necessary for national security, law
            enforcement, or public interests.
          </p>

          <h3>4. International Transfer of Personal Data</h3>
          <p className="muted">
            To facilitate operations across global markets, we may store your personal data on servers located in your
            region or in other countries depending on our Service configurations, and may transfer and process personal
            data with service providers located in different countries.
          </p>
          <p className="muted">
            Where a transfer meets the definition of international or cross‑border transfer under applicable law, we will
            determine the legal basis and take appropriate measures (e.g., adequacy decisions, standard contractual
            clauses) to ensure a level of protection required by law. See, for example,
            <a href="https://commission.europa.eu/publications/standard-contractual-clauses-international-transfers_en" target="_blank" rel="noreferrer"> EU SCC information</a>.
          </p>

          <h3>5. Data Security and Data Retention</h3>
          <p className="muted">
            We implement reasonable and appropriate administrative, technical, organizational, and physical security
            measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized
            access, disclosure or misuse, and other unlawful forms of processing.
          </p>
          <p className="muted">
            We retain personal data only as long as reasonably necessary to fulfill the purposes set out in this Policy
            unless a longer retention is required by law. When no longer required, we will delete or anonymize the data.
          </p>

          <h3>6. Your Legal Rights</h3>
          <p className="muted">
            Depending on your jurisdiction, you may have rights such as access, rectification, erasure, restriction,
            portability, objection, withdrawal of consent, and the right to complain to a supervisory authority. We may
            need to verify your identity before acting on requests. If we decline your request, we will explain why.
          </p>
          <p className="muted">If you reside in the EEA, the following may apply:</p>
          <ul>
            <li>Access: request access to personal data we hold about you.</li>
            <li>Rectification: request corrections to inaccurate personal data.</li>
            <li>
              Erasure: request deletion where, for example, processing is unlawful or no longer necessary, or consent is
              withdrawn with no other legal basis.
            </li>
            <li>
              Restriction: request limited processing in cases such as contested accuracy or for legal claims.
            </li>
            <li>
              Portability: receive personal data in a machine‑readable format and have it transmitted to another
              controller where technically feasible.
            </li>
            <li>
              Objection: object to processing based on legitimate interests; for direct marketing (including related
              profiling), you can object at any time.
            </li>
            <li>
              Withdrawal of consent: withdraw consent at any time; this does not affect processing already performed
              based on consent.
            </li>
            <li>
              Right to complain: you may complain to your local data protection authority.
            </li>
          </ul>
          <p className="muted">
            If you reside in California, you may have rights under the CCPA/CPRA including access, deletion (subject to
            exceptions), the right to opt‑out of sale/share of personal data, and freedom from discrimination for
            exercising your rights. You can manage certain preferences in the app settings (e.g., “Do Not Sell My Data”) or
            by contacting us.
          </p>

          <h3>7. Children’s Privacy</h3>
          <p className="muted">
            Our Services are designed for users of various age groups. We do not knowingly collect personal data from, or
            serve targeted advertisements to, children as defined by applicable laws. If you believe we have collected
            personal data from a child in violation of our policies, please contact us.
          </p>

          <h3>8. Changes to this Policy</h3>
          <p className="muted">
            We may amend this Policy from time to time. If we change anything important (e.g., types of personal data we
            collect), we will provide a prominent link together with the updated policy for your reference. By continuing
            to use the Services, you acknowledge that you have read and understood the updated Policy.
          </p>

          <h3>9. Contact Us</h3>
          <p className="muted">
            If you have queries, complaints, feedback or other matters on personal data protection, including requests to
            exercise your legal rights, please contact us through the in‑game settings interface or via
            <a href="mailto:privacy@example.com"> privacy@example.com</a>.
          </p>

          <h3>Appendix: Advertising Partners List</h3>
          <p className="muted">Last Updated: July 28, 2025</p>
          <ul>
            <li>Amazon (US) — Amazon Ads API — https://advertising.amazon.com/legal/privacy-notice</li>
            <li>AppLovin Corporation (US) — AppLovin SDK and Applovin MAX SDK — https://www.applovin.com/privacy</li>
            <li>Appsflyer Ltd. (Israel) — AppsFlyer SDK — https://www.appsflyer.com/privacy-policy</li>
            <li>ByteDance Pte. Ltd. (Singapore) — Pangle SDK — https://www.pangleglobal.com/privacy</li>
            <li>Digital Turbine (IL) Ltd / Fyber Group (Israel) — Fyber (DT Exchange) SDK — https://www.digitalturbine.com/legal/privacy-policy</li>
            <li>Facebook, Inc. (US) — Facebook Analytics / Audience Network — https://www.facebook.com/about/privacy</li>
            <li>InMobi PTE Ltd (Singapore) — InMobi SDK — https://www.inmobi.com/privacy-policy</li>
            <li>Ogury Ltd (UK) — Ogury SDK; ironSource Ads SDK — https://privacy.ogury.com</li>
            <li>Unity Ads Inc. (US) — Unity Ads SDK — https://unity3d.com/legal/privacy-policy</li>
            <li>Vungle, Inc. (US) — Vungle (Liftoff) SDK — https://vungle.com/privacy/</li>
            <li>Verve Group, Inc. (US) — Verve SDK — https://www.verve.com/privacy-policy</li>
            <li>Google Inc. (US) and partners — Google AdMob SDK — https://policies.google.com/privacy</li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  )
}
