import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "./security.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
         <div className={styles.securitySection}>

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

          <h1 className={styles.title}>Security</h1>

          <div className={styles.scrollArea}>
            <div className={styles.content}>

              

              <p>
                Our Security Philosophy: Defense in Depth
At Qyuro, we are building a "Thinking Partner." We understand that you cannot have a true partnership without absolute trust.

Whether you are a CEO discussing trade secrets, a developer debugging proprietary code, or an individual seeking wellness insights, you deserve to know that your conversation is happening in a digital vault.

Security is not a feature we add at the end; it is the bedrock of our architecture. We employ a "Defense in Depth" strategy, layering multiple protective measures, from the physical hardware level to the abstract AI model alignment level, to ensure that if one layer is ever challenged, others stand ready to protect your data.

This page outlines the rigorous technical, administrative, and physical controls we have implemented to secure the Qyuro ecosystem.
              </p>
              <h3>Data Encryption and Infrastructure</h3>

              <p>
              We treat every byte of data as if it were highly sensitive. Our infrastructure is built on world-class cloud providers (such as AWS/Azure), but we add our own proprietary security layers on top.

Encryption in Transit and at Rest

We believe in "always-on" encryption.

In Transit: When you speak to Qyuro or upload a file, your data travels through a secure tunnel. We use TLS 1.3 (Transport Layer Security), the modern standard for web security, to prevent any "man-in-the-middle" attacks. Even if someone intercepted your connection, they would see only indecipherable code.
At Rest: Once your data reaches our servers, it is immediately encrypted using AES-256 (Advanced Encryption Standard with 256-bit keys). This is the same encryption standard used by banks and military organizations worldwide. Keys are managed via a strict Key Management Service (KMS) with automatic rotation.

Database Isolation
We do not store all data in one giant bucket. We use logical tenant separation.
User Data Separation: Your chat history is tagged with a unique tenant ID that is cryptographically separated from other users.
Feature Isolation: Data from sensitive features (like Wellness Check-ins) is stored in isolated data enclaves with stricter access controls than general web search data.
              </p>

              <h3>AI Model Security and Safety</h3>


              <p>
               Securing an AI is different from securing a standard app. We have to secure the "mind" of the machine.

Adversarial Testing (Red Teaming)

Before we release any update to Qyuro’s model, it undergoes rigorous "Red Teaming." We hire external security experts and ethical hackers to attack our AI.
Prompt Injection Defense: They try to trick Qyuro into revealing its system instructions or ignoring safety protocols. We use these tests to patch vulnerabilities before they reach you.
Jailbreak Resistance: We continually train our models to recognize and refuse "jailbreak" attempts (commands designed to bypass ethical filters).

Real-Time Web Sandbox

Qyuro’s unique ability to browse the live web introduces risks. To mitigate this, our web crawler operates in a Sandboxed Environment.
When Qyuro visits a website to verify a fact for you, it does so in a disposable, isolated container.
If a website contains malware or a virus, it is trapped inside that container and destroyed. It can never jump from the web to our core servers, and certainly never to your device.
              </p>

              <h3>Application Security</h3>
              <p>
               The interface you use (web or mobile) is hardened against modern cyber threats.

Authentication and Identity
SSO & MFA: We support Single Sign-On (SSO) for enterprise clients and Multi-Factor Authentication (MFA) for all users. This ensures that a stolen password is not enough for an attacker to access your account.
Session Management: We employ aggressive session timeouts and token invalidation. If you change your password, all active sessions on other devices are immediately killed.

Vulnerability Management

Bug Bounty Program: We believe the global security community is an ally. We run a private Bug Bounty program where we pay security researchers to find and report potential weaknesses in Qyuro code.
Automated Scanning: Our code pipelines run automated SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) tools every time a developer commits code, ensuring no security regression goes live.
              </p>

              <h3>Privacy-First Feature Architecture</h3>
              <p>
                Qyuro’s unique features require unique security handling.

Wellness & Esoteric Data Handling
We understand that typing symptoms into Wellness Check-in or uploading a hand photo for Palm Reading requires extreme discretion.

Ephemeral Processing: For these specific features, we utilize "Ephemeral Processing." The data is sent to the inference engine, the answer is generated, and the raw input (e.g., the hand image) is immediately discarded from the processing memory.
No Training on Sensitive Data: We have hard-coded "exclusion zones" in our data pipeline. Data tagged as "Health/Wellness" is automatically flagged to be excluded from future model training sets.

Multimedia Anonymization
When you upload documents or images for analysis:
Our system attempts to scrub metadata (EXIF data, GPS coordinates) from images before they are processed by the AI, ensuring your location privacy is preserved even if you forget to scrub the file yourself.
              </p>

              <h3>Operational Security (Internal Governance)</h3>
              <p>
               The best encryption fails if the people managing it are careless. We govern our internal team with strict discipline.

Principle of Least Privilege
Access Control: No engineer at Qyoro has access to user data by default. Access is granted only on a "need-to-know" basis for specific support tickets or engineering tasks.
Just-in-Time Access: If an engineer needs to access a database to fix a critical bug, they must request a temporary, time-bound access token that expires automatically after the task is done.

Audit Logging
The "Watcher" System: Every internal action is logged. If an engineer queries a database, that action is recorded in an immutable audit log. Our security team reviews these logs using automated anomaly detection to spot any unusual internal behavior.

Employee Training
All Qyuro employees undergo mandatory background checks and comprehensive security training during onboarding, with quarterly refreshers on phishing, social engineering, and data privacy laws.
              </p>
              <h3>Compliance and Certifications</h3>
              <p>
                We align our security posture with global standards to ensure we are enterprise-ready.

GDPR & CCPA: We are fully compliant with the General Data Protection Regulation (EU) and the California Consumer Privacy Act (USA). This includes building tools that allow you to export or delete your data instantly.
SOC 2 Alignment: We design our controls based on the SOC 2 (Service Organization Control) Trust Services Criteria. We are currently in the process of obtaining our Type II attestation to provide third-party validation of our security claims.
              </p>

              <h3>Incident Response Plan</h3>
             <p>
                Despite the best defenses, no system is immune to every theoretical threat. We prepare for the worst.
24/7 Response Team: We have a dedicated Security Incident Response Team (SIRT) on call 24/7/365.
Transparency Protocol: In the unlikely event of a data breach, we are committed to transparency. We will notify affected users within 72 hours of confirming a breach, providing clear details on what happened, what data was involved, and what steps you should take.
             </p>

              <h3>Your Role in Security</h3>
             <p>
                Security is a partnership. Here is how you can help keep your Qyuro account safe:
Use a Strong Password: Do not reuse passwords from other sites.
Enable MFA: Turn on 2-Factor Authentication in your settings.
Be Careful with Sharing: Remember that if you share a Qyuro chat link publicly, anyone with the link can see that specific conversation.
             </p>

              <h3>Contact Our Security Team</h3>
             <p>
               If you have found a vulnerability, have a security concern, or are a law enforcement official, please reach out to us directly.
Security Reports: security@qyoro.com (PGP Key available upon request)
Privacy Concerns: privacy@qyoro.com

We are Qyuro. We protect the truth, and we protect you.
             </p>

             


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
