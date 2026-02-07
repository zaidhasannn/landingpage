import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "./service.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.serviceSection}>

        {/* LEFT ORB BACKGROUND */}
        <Image
          src="/icons/contactus.png"
          alt=""
          width={855}
          height={855}
          className={styles.orb}
          priority
        />

        <section className={styles.centerBlock}>

          <h1 className={styles.title}>Terms of Use</h1>

          <div className={styles.scrollArea}>
            <div className={styles.content}>

              <h3>Acceptance of Terms</h3>

              <p>
                Welcome to Qyuro ("we," "our," "us," or the "Company"). We are an advanced artificial intelligence research and deployment company dedicated to creating a thinking partner that grounds intelligence in truth.
Please read these Terms of Service ("Terms") carefully. These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Qyuro AI Inc. 
governing your access to and use of our website, mobile applications, the Qyuro.city discovery engine, our API, and our related software and services (collectively, the "Services").

BY CLICKING "SIGN UP," "CREATE ACCOUNT," OR BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS.
If you are entering into these Terms on behalf of a company, organization, or other legal entity, you represent that you have the authority to bind such entity to these Terms. 
If you do not agree to these Terms, you may not access or use the Services. We grant you access to Qyuro specifically conditioned upon your acceptance of every clause contained herein..
              </p>
              <h3>The Nature of Our Services (AI & Real-Time Data)</h3>

              <p>
               Qyuro is not a traditional software product; it is a dynamic, evolving Artificial Intelligence system. By using the Services, you acknowledge and agree to the following unique characteristics:

Probabilistic Nature of AI
While Qyuro is engineered with a "Real-Time Grounding" architecture designed to minimize hallucinations and provide cited sources, it remains a probabilistic system. This means that output is generated based on patterns and real-time data retrieval, not human consciousness.
Accuracy: You understand that despite our "Zero Hallucinations" goal, the Services may occasionally produce incorrect, stereotypical, or biased information ("Output"), particularly when parsing complex real-time web data.
User Verification: You are responsible for evaluating the accuracy and appropriateness of any Output. Qyoro should not be the sole source of truth for critical decisions.

Continuous Evolution
We are constantly improving our models. We reserve the right to modify, suspend, or discontinue any part of the Services (including specific features like AI Reframe or Voice-to-Text) at any time, with or without notice.
              </p>

              <h3>Specific Feature Disclaimers (Crucial)</h3>


              <p>
                Qyuro offers specialized features that require specific legal boundaries. By using these features, you explicitly agree to the limitations below.

Wellness & Health Check-ins
The "Wellness Check-in" feature is an informational tool powered by a Large Language Model (LLM).
NO MEDICAL ADVICE: QYURO IS NOT A DOCTOR, MENTAL HEALTH PROFESSIONAL, OR EMERGENCY SERVICE. The information provided regarding symptoms, mental state, or physical health is for educational and supportive purposes only.
Liability: You agree that Qyuro is not liable for any actions you take based on health-related Output. Never disregard professional medical advice or delay in seeking it because of something you have read on Qyuro. In a medical emergency, call your local emergency services immediately.

Esoteric Features (Astrology & Palmistry)
Features such as "Today’s Alignments" (Astrology) and "Digital Palm Reading" are provided for entertainment and self-reflection purposes only.
We make no scientific claims or guarantees regarding the predictive accuracy of these features.
Decisions regarding your finances, relationships, or life path should not be based solely on these automated esoteric interpretations.

              </p>

              <h3>Eligibility and Account Registration</h3>
              <p>
                Age Requirements
You must be at least 13 years old (or the minimum age of digital consent in your country) to use Qyoro. If you are under 18, you represent that you have your parent or guardian’s permission to use the Services.

Account Security
You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately at security@qyoro.com if you suspect any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to protect your password.
              </p>

              <h3>Content Ownership and Rights</h3>
              <p>
               We believe in a fair model of ownership where you own your creativity, and we own our infrastructure.

Your Input (User Content)
You retain all ownership rights to the text prompts, file uploads, images, and voice data ("Input") that you submit to the Services. You represent that you have all necessary rights to submit such Input and that doing so does not violate any third-party intellectual property rights.

Your Output
Subject to your compliance with these Terms, Qyuro assigns to you all its right, title, and interest in and to the Output generated by the Services in response to your Input.
Commercial Use: You may use the Output for any legal purpose, including commercial purposes (e.g., publishing articles written by Qyuro), without paying us royalties.
Similarity: Due to the nature of AI, distinct users may receive similar Outputs. You do not hold exclusive rights to generic responses (e.g., "The capital of France is Paris").

Our Use of Your Content
To provide and maintain the Services, you grant Qyuro a worldwide, non-exclusive, royalty-free license to process your Input.
Training: We may use de-identified, aggregated content to train and improve our machine learning models. You may opt-out of this training in your Account Settings.
Privacy Exception: Data from "Wellness Check-ins" is treated with higher sensitivity and is excluded from general model training by default
              </p>

              <h3>Acceptable Use Policy (AUP)</h3>
              <p>
               We want Qyuro to be a safe ecosystem. You agree strictly NOT to use the Services for:
Illegal Activities: Violating any applicable national, federal, state, local, or international law or regulation.
Harmful Content: Generating content that promotes child sexual abuse material (CSAM), self-harm, violence, hate speech, or harassment.
Deception: Generating "deepfakes" or realistic images/text intended to mislead others about real-world events or to impersonate an individual without their consent.
Reverse Engineering: Attempting to decompile, disassemble, or reverse engineer the source code, algorithms, or underlying models of Qyuro.
Prompt Injection: Engaging in "jailbreaking" or adversarial attacks designed to bypass our safety filters or instructions.
Web Scraping: Using automated bots, scrapers, or spiders to access Qyuro.city or extract data from our Services without our written permission.
Medical Misuse: Using the Services to provide medical advice or prescriptions to others.
              </p>
              <h3>Intellectual Property Rights of Qyuro</h3>
              <p>
                The Services, including the Qyuro logo, the "Thinking Partner" trademark, the interface design, the Qyuro.city architecture, and the underlying algorithms, are the exclusive property of Qyuro AI Inc. and its licensors. These Terms do not grant you any right, title, or interest in the Services other than the limited right to use them in accordance with these Terms.
              </p>

              <h3>Third-Party Links and Integrations</h3>
             <p>
              Qyuro functions as a gateway to the live web.

Citations: Our Services may provide links or citations to third-party websites (news outlets, research papers). We do not control these sites.
No Endorsement: The inclusion of a link does not imply our endorsement of the site or its content. You acknowledge and agree that Qyuro is not responsible or liable for any damage or loss caused by your use of any third-party content.
             </p>

              <h3>Fees, Billing, and Subscriptions</h3>
             <p>
                If you subscribe to Qyuro Pro or other paid tiers:

Payment Authorization: You authorize us to charge your provided payment method for the subscription fees (plus applicable taxes).
Billing Cycle: Fees are billed in advance on a monthly or annual basis.
Cancellation: You may cancel your subscription at any time through your account management page. Your cancellation will take effect at the end of the current billing period. We do not provide refunds for partial billing periods unless required by law.
Price Changes: We reserve the right to change our pricing. We will provide at least 30 days' notice before any price increase takes effect.
             </p>

              <h3>Disclaimer of Warranties</h3>
             <p>
              PLEASE READ THIS SECTION CAREFULLY.

THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, QYORO AI INC. DISCLAIMS ALL WARRANTIES, INCLUDING:

MERCHANTABILITY AND FITNESS: WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS OR BE COMPATIBLE WITH YOUR DEVICE.
NON-INFRINGEMENT: WE DO NOT WARRANT THAT THE OUTPUT WILL NOT INFRINGE ON THIRD-PARTY RIGHTS (THOUGH WE STRIVE FOR ORIGINALITY).
UNINTERRUPTED SERVICE: WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.

YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT, OR OTHER MATERIAL OBTAINED FROM THE SERVICE.
             </p>

             <h3>Limitation of Liability</h3>
             <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER QYORO AI INC. NOR ITS AFFILIATES, SUPPLIERS, OR PARTNERS WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO:

LOSS OF PROFITS, GOODWILL, USE, OR DATA.
COSTS OF PROCURING SUBSTITUTE GOODS OR SERVICES.
ANY UNAUTHORIZED ACCESS TO OR USE OF YOUR CONTENT.

OUR TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
             </p>

             <h3>Indemnification</h3>

             <p>You agree to defend, indemnify, and hold harmless Qyoro AI Inc., its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal and accounting fees) arising out of or in any way connected with:

Your access to or use of the Services.
Your violation of these Terms or the Acceptable Use Policy.
Your violation of any third-party right, including any intellectual property right or privacy right.
Your User Content.</p>

             <h3>Dispute Resolution and Binding Arbitration</h3>

             <p>We prefer to resolve disputes directly. If you have an issue, you agree to first contact us at legal@qyuro.com to attempt an informal resolution.

If we cannot resolve the dispute within 60 days, you and Qyuro agree to resolve any claims relating to these Terms or the Services through final and binding arbitration, rather than in court.

No Class Actions: You may only resolve disputes with us on an individual basis and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action.
Jurisdiction: The arbitration will be conducted in the State of [Insert State/Country], and judgment on the arbitration award may be entered into any court having jurisdiction thereof.</p>

              <h3>Modifications to Terms</h3>

              <p>Technology evolves rapidly, and so will Qyuro. We may update these Terms from time to time.

Notice: If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect (e.g., via email or a banner on the site).
Acceptance: By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.</p>
              
              <h3>General Provisions</h3>

              <p>Severability: If any provision of these Terms is held to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.
Entire Agreement: These Terms (and our Privacy Policy) constitute the entire agreement between you and Qyuro regarding the Services, superseding any prior agreements.
No Waiver: Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                
                <h3>Contact Us</h3>

                <p>If you have questions about how Qyuro balances Real-Time Intelligence with Real-Time Privacy, or if you wish to exercise your data rights, please reach out to us. We actually read our emails.

Email: privacy@qyuro.com</p>




            </div>
          </div>

        </section>
        </div>

      </main>

      <div className={styles.footerGap}>
  <Footer />
</div>

    </>
  );
}
