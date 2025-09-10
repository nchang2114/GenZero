import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Use — GenZero'
  }, [])

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="section-kicker">Legal</div>
          <h1 className="section-title">Terms of Use</h1>
          <p className="muted">Last Updated: August 8, 2025</p>
          <div className="spacer-40"/>

          <p className="muted">
            We provide games, features, content, and related services via websites, mobile applications, and other
            channels or platforms (the “Services”). The purpose of these terms (the “Terms”) is to stipulate rights,
            obligations, responsibilities and other necessary matters between us and the user in relation to access to
            and use of the Services under a legally binding contract.
          </p>
          <p className="muted">
            Before accessing and using our Services, please carefully read the Terms and ensure you have the right,
            authority and capacity of entering into an agreement with us. By installing, using, or otherwise
            accessing our Services, you confirm your agreement to the Terms.
          </p>
          <p className="muted">
            We may revise the Terms from time to time. If we revise the Terms, we will notify you by posting a
            notice along with the current terms prior to the effective date. The revised Terms will be effective as
            of the effective date as announced or informed. If you continue using our Services after such a revision,
            you are deemed to have agreed with the revised Terms.
          </p>

          <h3>1. Application and Scope</h3>
          <p className="muted">We provide users with the following Services:</p>
          <ul>
            <li>Games, features, content and contests;</li>
            <li>Customer services;</li>
            <li>Other services offered by us from time to time.</li>
          </ul>
          <p className="muted">
            Some of the Services are provided free of charge and users may choose to pay fees for certain functions
            and features of the Services.
          </p>

          <h3>1.1 Eligibility for Using Services</h3>
          <p className="muted">
            The Services are designed and provided to users of various age groups and please see the instructions
            for eligibility when downloading and using a specific Service. If you are between the ages of 13 and 18
            (or the relevant age defined as a minor in your jurisdiction), you should seek the authorization of your
            parents or legal guardians before using our Services.
          </p>
          <p className="muted">
            If parents or legal guardians consider that the Services are not suitable for their children, please
            contact us at <a href="mailto:support@example.com">support@example.com</a> and we will respond to your requests and take
            actions we consider appropriate.
          </p>

          <h3>1.2 Limited License and Restrictions</h3>
          <p className="muted">
            Subject to your agreement and continued compliance with the Terms, upon installing and using our Services,
            we grant you a non-exclusive, non-transferable, non-sublicensable, revocable license for your own
            non-commercial entertainment use. You hereby acknowledge that no title or ownership of our Services is
            being transferred or assigned to you, and the Terms are not to be construed as a sale of any rights to our Services.
          </p>
          <p className="muted">
            You agree not to use our Services for any other commercial purposes, such as advertising, soliciting, or
            sending commercial ads like chain letters, spam, etc. You also agree to comply with all applicable laws,
            regulations, and the Terms when accessing or using the Services.
          </p>
          <p className="muted">
            Any rights not expressly granted herein are reserved by us and our licensors. This includes the right to
            determine whether one's conduct violates the Terms and to take any action we deem appropriate in accordance
            with the Terms, to the fullest extent permitted by law.
          </p>

          <h3>2. User Account</h3>
          <p className="muted">
            If you use a third-party account (such as a Google account) to log in to our Services, please follow the
            applicable terms provided by the third party. You can access Google’s Terms of Service at:
            <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noreferrer"> https://policies.google.com/terms?hl=en-US</a>.
          </p>

          <h3>3. Purchase and Refunds</h3>
          <p className="muted">
            Users may pay fees for certain functions and features of the Services, including ads-free services. By completing such a
            purchase, you obtain a limited, personal, non-transferable, non-sublicensable, revocable license to use certain functions and features.
            These purchases can only be made by entering your App marketplace password and are subject to the payment terms and conditions of the App
            marketplace from which you make the purchase. You are responsible for maintaining the security of this password and complying with the
            applicable terms provided by the App marketplace. The minor shall not make purchases without the consent of his/her parents or legal guardians.
          </p>
          <p className="muted">
            If users consider that fees should be refunded under exceptional circumstances, please contact us and we will consider the request
            on a case-by-case basis.
          </p>

          <h3>4. Users’ Conduct</h3>
          <p className="muted">Users shall use the Services in a lawful, fair and reasonable manner. In using the Services, users may not:</p>
          <ul>
            <li>interfere with, damage or disrupt any part of our Services;</li>
            <li>transmit or upload viruses and harmful programs;</li>
            <li>copy, reproduce or sell any part of our Services;</li>
            <li>reverse engineer, modify, or extract data from the Services; and</li>
            <li>infringe the intellectual property rights and legitimate interests of any person.</li>
          </ul>

          <h3>5. Third-party Links and Services</h3>
          <p className="muted">
            The Services may include links to third-party websites, plug-ins and applications. Clicking on those links may allow users to visit the
            websites and applications of third parties. Use of third-party websites, services and products will be governed by the terms of service
            between users and third parties, and we assume no responsibility for the use of third-party websites, services and products.
          </p>
          <p className="muted">
            Users should read the terms of service and the privacy policies on third-party websites and applications to know the rights and obligations
            between the users and the third-parties, as well as how they collect and use personal data of users.
          </p>

          <h3>6. Intellectual Property Rights</h3>
          <p className="muted">
            All intellectual property rights, including trademarks, patents, copyrights and other kinds of intellectual property rights, whether registrable
            or not, in relation to all the trade or business names, domain names, logos, content, layout, text and graphics, source codes, algorithms,
            software, database, applications, content and information of our Services are protected by current laws and related international treaties and are
            legally owned or acquired by us.
          </p>

          <h3>7. Disclaimer and Limitation of Liability</h3>
          <p className="muted">
            Users acknowledge and understand that: You use the Services under your own responsibility and assume the risk yourself. To the extent permitted
            by applicable law, we do not take responsibility for losses incurred without the company’s fault as follows: (1) your violation of the Terms; (2)
            losses from using the Services in a way they are not designed or purposed; (3) losses of profits, revenues, or indirect, special, consequential, or
            punitive damages; (4) losses incurred by using Services or caused by a third party; (5) losses incurred by a reason imputable to you; (6) other
            losses incurred from a reason that is not imputable to us of its intention or fault.
          </p>
          <p className="muted">
            We cannot guarantee a 100% safe operating environment, and we assume no liability of whatsoever nature arising out of any failure, interruption and
            discontinuance of the Services due to the limitation of internet communication technologies and events of force majeure, attacks, viruses, worms and
            malicious codes, system vulnerability, failure of third-party services and other factors which are beyond the control of us.
          </p>
          <p className="muted">
            Unless otherwise provided in the terms and conditions of the relevant products or services, under no circumstances shall we be held liable for any delay
            or failure or disruption of the content or the services resulting directly or indirectly from acts of nature, forces or causes beyond our reasonable control.
          </p>

          <h3>8. Personal Data Protection</h3>
          <p className="muted">
            We highly value your privacy and take reasonable measures to protect your personal data. Please refer to our Privacy Policy for information on how we
            collect, use and share your data.
          </p>

          <h3>9. Indemnity</h3>
          <p className="muted">
            Users shall defend and indemnify us and our affiliates, directors, officers, employees, and users against all liabilities, damages, losses, costs, fees (including
            legal fees) and expenses relating to claims arising from or in connection with the violation of the Terms by users.
          </p>
          <p className="muted">
            Users shall be liable for and shall indemnify us and any third parties for any losses resulting from violation of these Terms. If a third party seeks damages from us
            because of users' illegal actions or violation of the Terms, users must defend us and hold us harmless from any liability. If we are not held harmless, users are
            responsible for compensating us for all losses incurred.
          </p>

          <h3>10. Termination</h3>
          <p className="muted">Users may stop using the Services at any time with or without notice. We may terminate the Terms if:</p>
          <ul>
            <li>users violate the Terms.</li>
            <li>the Services are no longer available to users.</li>
          </ul>
          <p className="muted">
            We reserve the right to determine, in our sole and absolute discretion, whether there has been a breach of the Terms. When a breach has occurred, we may take such
            action as we deem appropriate.
          </p>

          <h3>11. Governing Law and Dispute Resolution</h3>
          <p className="muted">
            The Terms shall be governed and construed by the laws of Singapore. If you have any concerns or issues you can contact us at
            <a href="mailto:support@example.com"> support@example.com</a>, and we will endeavor to resolve disputes with users under the Terms through amicable consultation. If a dispute cannot be resolved
            through consultation within 30 days, either party may submit the dispute for arbitration at the Singapore International Arbitration Centre (“SIAC”) in accordance with the SIAC
            Administered Arbitration Rules in effect at the time of applying for arbitration. The language of the arbitration shall be English. The arbitral award shall be final and binding
            upon you and us.
          </p>
          <p className="muted">
            If you are a resident in the EU, if and only to the extent that you act as a consumer within the meaning of local mandatory consumer law, the following will apply:
          </p>
          <ul>
            <li>
              Consumers with habitual residence in the European Union are, according to mandatory consumer law, subject to the laws of their respective place of residence and may bring
              claims in front of the local courts of their respective place of residence.
            </li>
            <li>
              The European Commission provides an online dispute resolution platform (“ODR platform”). The ODR platform is designed to help consumers and businesses to reach an out-of-court
              settlement in case of problems. The ODR platform can be accessed via the link:
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer"> https://ec.europa.eu/consumers/odr</a>. We are not obligated to and do not participate in alternative dispute resolution procedures before an alternative dispute resolution entity for consumers.
            </li>
          </ul>
          <p className="muted">
            If you are a resident in the US, you agree to resolve all disputes and claims between us on an individual basis through binding arbitration. You or we may bring an arbitration at
            any American Arbitration Association (“AAA”) location within the US. The US Federal Arbitration Act and federal arbitration law applies, and the arbitration will be governed by the
            AAA under its Commercial Arbitration Rules and, where applicable, its Consumer Arbitration Rules (available at http://www.adr.org).
          </p>
          <p className="muted">
            To the maximum extent permitted by the applicable national or state law, you and we agree not under any circumstances to bring or participate in a class or representative action,
            private attorney general action or collective arbitration.
          </p>

          <h3>12. Miscellaneous</h3>
          <p className="muted">
            Headings are for reference purposes only and in no way limit the scope or extent of each section and shall not affect the meaning of the language in each section.
          </p>
          <p className="muted">
            Users shall send all the communications and correspondence in writing to <a href="mailto:support@example.com">support@example.com</a>.
          </p>
          <p className="muted">
            If for any reason any provision of the Terms becomes unenforceable, that provision will be enforced to the maximum extent permitted so as to give effect to the intent of the Terms,
            and the remainder of the Terms will remain in full force and effect.
          </p>
          <p className="muted">
            The Terms may be amended from time to time, and we will notify users by publishing an updated Terms on the websites, mobile applications and channels or portals to which users have access.
          </p>
          <p className="muted">
            Users may not assign or transfer any rights and obligations under the Terms without our prior written consent.
          </p>
          <p className="muted">
            We may assign or transfer its rights and obligations under the Terms by publishing a notice on the websites, mobile applications and channels or portals which users have access to.
          </p>
          <p className="muted">
            The failure by users or us to enforce any provision of the Terms will not constitute a waiver of future enforcement of that or any other provision.
          </p>

          <h3>13. Contact Us</h3>
          <p className="muted">
            If you have any questions about the Terms, please contact us at: <a href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
