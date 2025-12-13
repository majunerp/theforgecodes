import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - The Forge Codes",
    description: "Privacy Policy for The Forge Codes website.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300">
                    <p className="text-lg">
                        Last updated: December 2025
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                        <p>
                            We collect minimal information necessary to provide our services. This may include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-center">
                            <li>Usage data (pages visited, time spent on site)</li>
                            <li>Device information (browser type, operating system)</li>
                            <li>IP address for security and analytics purposes</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-center">
                            <li>Improve our website and services</li>
                            <li>Analyze usage patterns to enhance user experience</li>
                            <li>Ensure security and prevent abuse</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">3. Cookies</h2>
                        <p>
                            We may use cookies and similar technologies to enhance your browsing experience.
                            You can control cookie settings through your browser preferences.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">4. Third-Party Services</h2>
                        <p>
                            We may use third-party analytics services to help understand how visitors use our site.
                            These services may collect information about your use of our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
