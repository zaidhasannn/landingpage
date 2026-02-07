import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
         <div className={styles.contactSection}>

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

          <h1 className={styles.title}>Contact Us</h1>

          <div className={styles.scrollArea}>
            <div className={styles.content}>

              <h3>Connecting Human Curiosity with Artificial Intelligence</h3>

              <p>
                Connecting Human Curiosity with Artificial Intelligence


At Qyuro, we spend our days building an artificial intelligence that can think, reflect, and verify. We are obsessed with code, algorithms, and neural networks. 
But we never forget that on the other side of the screen, there is a human being you.

While our product is automated, our relationships are not. We believe that technology should not build walls between people; it should build bridges. That is why our "Contact Us" philosophy is different.

We don't hide behind automated forms or endless bot loops. If you need us, we are here.
Whether you are a user facing a technical glitch, a journalist seeking the truth about AI, or just someone who wants to share how Qyuro helped them today,we want to hear from you.
This page is your gateway to the team behind the machine.
              </p>
              <h3>Get Support (User Assistance)</h3>

              <p>
              We know how frustrating it is when technology doesn't work the way it should. Our Support Team is not an algorithm; they are product experts who sit right next to our engineers.

Technical Troubleshooting
If Qyuro is behaving unexpectedly—perhaps the "Real-Time Grounding" isn't fetching the latest news, or the "AI Reframe" filter is lagging—we need to know.
How to Report: When contacting us about a bug, please include your device type (Mobile/Desktop), browser version, and a screenshot if possible. The more detail you provide, the faster we can replicate and fix the issue.
Response Time: We aim to acknowledge all critical technical tickets within 4 hours during business hours.

Account & Billing Inquiries
For questions regarding your Qyuro Pro subscription, payment failures, or account settings:
We prioritize billing issues to ensure you never lose access to your workflow.
Privacy Note: Please never send your full credit card number via email. Our support agents will never ask for your password or sensitive payment details directly.
Email for Support: support@qyuro.com
              </p>

              <h3>Feedback & "Hallucination" Reporting</h3>


              <p>
                Qyuro is designed to be the "AI that doesn't guess." We pride ourselves on accuracy and citations. However, the web is complex, and sometimes models make mistakes.
We treat errors not just as bugs, but as learning opportunities. If you spot a factual error, a broken citation, or a response that feels "off," you are our most valuable critic.
The Feedback Loop: When you report an inaccuracy, it doesn't just go into a void. It is flagged for our Model Evaluation Team. Your feedback directly helps retrain and refine the next version of Qyuro. You are literally helping to make the AI smarter.
Feature Requests: Have an idea for a new "Reframe" filter? Want a specific astrology feature? Tell us. Many of our best features started as user emails.

Report an Issue: feedback@qyuro.com
              </p>

              <h3>Strategic Partnerships & Alliances</h3>
              <p>
               While we are not currently opening our API to the public, we are actively seeking strategic partners who share our vision of a verified, grounded AI future.

Data & Content Partnerships
Qyuro thrives on high-quality information. We partner with publishers, research institutions, and data providers to ensure our answers are grounded in the best possible sources.
If you represent a media house or a data repository and want to ensure your content is accurately represented in Qyuro’s ecosystem, let’s talk.

Educational Collaborations
We believe Qyuro is a powerful tool for learning. We are open to pilot programs with universities and research labs that want to test the efficacy of "citation-based AI" in academic settings.
Partnership Inquiries: partners@qyuro.com
              </p>

              <h3>Press & Media Relations</h3>
              <p>
                The story of Artificial Intelligence is the story of our time. We understand that journalists, analysts, and content creators play a vital role in interpreting this technology for the public.
We are happy to provide:

Commentary: Expert quotes on the state of AI, real-time search, and the ethics of generative models.
Assets: High-resolution logos, product screenshots (UI), and executive headshots.
Interviews: Direct access to our founders and lead engineers for deep-dive discussions.
We respect deadlines. If you are on a tight schedule, please mark your subject line with [URGENT MEDIA] to ensure it gets flagged to our PR lead immediately.

Press Contact: press@qyuro.com
              </p>

              <h3>Legal & Privacy Concerns</h3>
              <p>
                Trust is hard to earn and easy to lose. If you have concerns about how your data is being handled, or if you are a copyright holder wishing to discuss content citation, we have a dedicated channel for you.
Data Rights: To exercise your "Right to be Forgotten" or to request a data export, please contact our Privacy Officer.
Security Reporting: If you are a security researcher who has found a vulnerability, please do not use the general support email. Contact our Security Team directly so we can initiate a secure disclosure process.

Legal/Privacy Team: legal@qyuro.com
Security Team: security@qyuro.com
              </p>
              <h3>Frequently Asked Questions (FAQ)</h3>
              <p>
                Before you wait for an email reply, you might find your answer right here. These are the most common questions our inbox receives.

Can I integrate Qyuro into my own app via API?
Currently, we are focused on perfecting the core user experience and are not offering public API access. However, we are planning to launch a developer program in the future. You can email us to be added to the waitlist.

Can I talk to Qyuro on the phone?
Currently, Qyuro supports voice input via our app, but we do not offer live phone support with human agents. Our email support is the fastest way to get help.

Why was my Wellness Check-in data not saved?
By design! For your privacy, Qyoro treats certain sensitive interactions (like wellness or palm reading) as ephemeral (temporary). Once the session ends, we often discard the raw data to protect your identity. This is a feature, not a bug.

How do I cancel my subscription?
You can cancel anytime from the "Settings"- "Billing" menu inside the app. If you cancel, you will retain access until the end of your current billing cycle.
              </p>

              <h3>Our Response Philosophy</h3>
             <p>
                In a world of automated "noreply" emails, we strive to be different.
Human Triage: Every email is initially scanned by a human or a smart-routing system to ensure it goes to the right department, not a generic queue.
No Scripted Walls: While we use templates for speed, our agents are empowered to go off-script to solve your unique problem.
Respect for Time: We know you are busy. We try to solve problems in the first reply, rather than going back and forth asking for basic details.
             </p>

              <h3>Visit Us (Physical Headquarters)</h3>
             <p>
                While we are a digital-first company, we exist in the physical world. If you need to send us physical mail (legal notices, partnership contracts, or even fan mail!), you can reach us at our headquarters.

Qyuro AI Inc. 44 Montgomery Street, Suite 1200 San Francisco, CA 94104 United States.

Please note: Our office is not open for walk-in support. Please email us to schedule a meeting.
             </p>

              <h3>Join Our Community</h3>
             <p>
               Sometimes the best support comes from fellow users. Join the Qyoro community to share prompts, discuss the latest AI features, and find creative ways to use the Reframe tool.

Twitter/X: @QyoroAI (For status updates and quick tips)
LinkedIn: Qyoro AI
             </p>

             <h3>Final Thoughts</h3>
             <p>
               We are building Qyuro for you. Whether you are using it to write a thesis, debug code, check your horoscope, or analyze stock trends—you are the reason we push code every day.

Don't hesitate to reach out. We are listening.

The Qyuro Team Beyond Search. Smarter than Chat.
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
