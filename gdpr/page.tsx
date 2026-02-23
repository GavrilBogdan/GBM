import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-24">
      <Navbar />

      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "150px 150px",
        }}
      />
      <div className="w-45 h-30 blur-3xl bg-blue-400/60 absolute left-2 top-[15rem]"></div>
      <div className="w-45 h-30 blur-3xl bg-cyan-400/60 absolute right-2 bottom-[15rem]"></div>
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-3xl border border-blue-200/40 rounded-3xl p-8 sm:p-14 text-blue-950 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl sm:text-5xl font-black font-inter tracking-tight mb-10 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 font-mont leading-relaxed text-lg">
          <p>
            The protection of your personal data is a priority for{" "}
            <strong>GBM</strong>. This Privacy Policy explains what data we
            collect, why we collect it, and how it is used when you interact
            with our website and services.
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-3">1. What Data We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>
                Any information voluntarily submitted through our contact or
                quote request forms
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              2. Purpose of Data Collection
            </h2>
            <p>Your data is collected strictly for:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Responding to inquiries and contact requests</li>
              <li>Providing personalized offers and service information</li>
              <li>Scheduling consultations or requested services</li>
              <li>Improving our website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Legal Basis</h2>
            <p>
              We process personal data based on the explicit consent provided
              when you complete and submit forms on our website, in accordance
              with Regulation (EU) 2016/679 (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              4. Data Storage & Security
            </h2>
            <p>
              Personal data is stored securely and is not sold or shared with
              third parties. Limited data may be processed through trusted
              third-party services necessary for website functionality (such as
              secure email delivery providers).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
            <p>
              Under the GDPR, you have the following rights regarding your
              personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Contact Information</h2>
            <p>
              For any requests regarding your personal data, you may contact us
              at:
            </p>
            <p className="mt-2 font-semibold">
              Email: gavrilbogdan30@gmail.com
            </p>
          </section>

          <p className="text-sm text-blue-900/60 pt-8 border-t border-blue-200">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    </section>
  );
}
