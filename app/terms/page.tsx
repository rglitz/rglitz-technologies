export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using RGlitz's services, you agree to be bound by these Terms and Conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p>RGlitz provides digital marketing services including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Website design and development</li>
            <li>Mobile application development</li>
            <li>SEO and digital marketing</li>
            <li>Content creation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Payment schedules will be outlined in individual service agreements</li>
            <li>All fees are non-refundable unless otherwise specified</li>
            <li>Late payments may incur additional charges</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>All intellectual property rights in relation to our services remain the property of RGlitz. Upon full payment, clients receive a license to use the deliverables as specified in their service agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Client Responsibilities</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide accurate and timely information</li>
            <li>Review and approve deliverables within agreed timeframes</li>
            <li>Ensure compliance with all applicable laws</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p>RGlitz shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p>Either party may terminate the service agreement with written notice as specified in the individual service agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at:</p>
          <ul className="list-none mb-4">
            <li>Email: info@rglitz.com</li>
            <li>Phone: +91 76708 32977</li>
          </ul>
        </section>
      </div>
    </div>
  );
}