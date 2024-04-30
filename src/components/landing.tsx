import Header from '@/components/Header/Header';
import LandingHero from '@/components/LandingHero/LandingHero';
import MetamaskLogoViewer from '@/components/MetamaskLogoViewer/MetamaskLogoViewer';
import { ProtocolDescription } from '@/components/ProtocolDescription/ProtocolDescription';
import SnapInstall from '@/components/SnapInstall/SnapInstall';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';
import { WebAppSection } from '@/components/WebAppSection/WebAppSection';
export function Landing() {
  return (
    <main key="1" className="bg-gray-50 text-gray-900">
      <Header />
      <LandingHero />
      <ProtocolDescription />
      <WebAppSection />
      <section className="w-full h-screen border-b-2 border-gray-200 flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Introducing SCI
              </h1>
              <p className="mx-auto max-w-[1100px] text-gray-500 md:text-xl">
                Secure Contract Interaction (SCI) is an open-source protocol
                crafted to strengthen the security at the crucial junction
                between traditional web infrastructure and the evolving
                blockchain ecosystem. <br /> Our primary objective is to
                safeguard web domains from unauthorized interactions and
                vulnerabilities, ensuring a more secure and reliable web3
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why SCI?
              </h2>
              <p className="mx-auto max-w-[1100px] text-gray-500 md:text-xl">
                In the rapidly evolving landscape of blockchain technology, the
                interface where traditional web meets blockchain is often
                vulnerable, leaving it susceptible to security breaches like DNS
                hijacking and compromised frontend servers. <br />
                SCI is engineered to mitigate these risks, providing a robust
                verification system that instills confidence and trust in web3
                interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-b-2 border-gray-200 px-8 py-12 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-8 flex justify-center">
        <div className="flex flex-col items-centerjustify-center mt-8">
          <div className="flex flex-col items-center justify-center space-y-3 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Secure Your Web3 Journey
            </h2>
            <MetamaskLogoViewer width={129} height={129} followMouse={true} />
            <p className="text-gray-500 md:text-lg">
              <b>SCI MetaMask Snap</b> effortlessly enhances your web3 security
              by verifying the smart contract address and domain involved in
              your transactions. It ensures your routine is undisturbed while
              providing assurance that you&apos;re interacting with whitelisted
              contracts authorized by the legitimate dApp owners, safeguarding
              against any unauthorized alterations or hijacking.
            </p>
          </div>
          <SnapInstall snapId={process.env.NEXT_PUBLIC_SCI_SNAP_URL!} />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={'/images/icons/download.svg'}
              alt={'Download Icon'}
              className="h-8 w-8"
            />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Install with Ease
            </h2>
            <p className="text-gray-500 md:text-lg">
              Begin just by clicking the button to add the SCI Guard Snap to
              your MetaMask wallet—installation is quick and effortless.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={'/images/icons/verified.svg'}
              alt={'Verification Icon'}
              className="h-8 w-8"
            />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              One-Click Verification
            </h2>
            <p className="text-gray-500 md:text-lg">
              With SCI Snap installed, verification is at your fingertips. Each
              time you initiate a transaction, a simple click within SCI’s tab
              in Metamask activates the plugin.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={'/images/icons/plug2.svg'}
              alt={'Integration Icon'}
              className="h-8 w-8"
            />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Seamless Integration
            </h2>
            <p className="text-gray-500 md:text-lg">
              SCI Snap integrates seamlessly with your transaction workflow,
              offering real-time security checks without disrupting your
              experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={'/images/icons/userfriendly.svg'}
              alt={'User-Friendly Icon'}
              className="h-8 w-8"
            />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              User-Friendly Interface
            </h2>
            <p className="text-gray-500 md:text-lg">
              Designed with simplicity in mind, the plugin provides an intuitive
              interface that makes staying secure an unobtrusive part of your
              web3 interactions.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full p-8 py-12 md:py-24 lg:py-32 grid lg:grid-cols-2  justify-center items-center text-center">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enhance Your dApp Security
          </h2>
          <p className="text-gray-500 md:text-xl text-left">
            Our upcoming web application offers a straightforward solution to
            verify domain authenticity and securely associate your smart
            contracts with your domain. With user-friendly functionality, you
            can easily manage your whitelist, ensuring that only your approved
            contracts can interact with your domain. <br />
            Stay tuned for the upcoming release of this tool, but meanwhile, you
            can begin whitelisting your smart contracts by reaching out to us at{' '}
            <b>
              <Link href={'mailto:support@sci.domains'}>
                support@sci.domains
              </Link>
            </b>
            .
          </p>
        </div>
        <div className="flex justify-center">
          <img
            alt="Enterprise Image"
            className="aspect-square object-cover rounded-lg"
            height="400"
            src="/images/security.png"
            width="400"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Have questions? We&apos;ve got answers.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                How does the SCI Protocol improve security?
              </summary>
              <p className="mt-2 text-gray-500">
                SCI enhances security by verifying authorized smart contracts
                for web domains, reducing risks associated with unauthorized or
                malicious contracts.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                What is the cost of using the SCI Protocol?
              </summary>
              <p className="mt-2 text-gray-500">
                The SCI Protocol is free for both end-users and dApp owners.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                Which wallets are compatible with the SCI Protocol?
              </summary>
              <p className="mt-2 text-gray-500">
                We aim to support a broad range of wallets, focusing on
                integrating with the most popular and widely used ones. But from
                now on only Metamask is compatible with our protocol.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                Do I need to share any sensitive information like a secret
                phrase with SCI?
              </summary>
              <p className="mt-2 text-gray-500">
                No, SCI does not require any sensitive information such as
                secret phrases or private keys.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                Is the SCI Protocol easy to integrate with my web domain?
              </summary>
              <p className="mt-2 text-gray-500">
                Yes, SCI is designed for straightforward integration with web
                domains, emphasizing user-friendliness.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                How can I whitelist my smart contracts with SCI?
              </summary>
              <p className="mt-2 text-gray-500">
                Until our web application launches, you can whitelist your
                contracts by contacting us at <b>support@sci.domains</b>.
              </p>
            </details>

            <details className="text-left">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                Is there going to be a browser extension for SCI?
              </summary>
              <p className="mt-2 text-gray-500">
                Yes, developing a browser extension is on our roadmap. This will
                offer consistent features across different wallets, enhancing
                user experience and security.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We&apos;re a team committed to making the Web3 space safer.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 1"
                className="w-24 h-24 rounded-full"
                height="100"
                src="/images/team_identities/al.png"
                style={{
                  aspectRatio: '100/100',
                  objectFit: 'cover',
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold">Agustin Lavarello</h3>
              <p className="text-sm text-gray-500">
                Fullstack & Solidity Engineer
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 2"
                className="w-24 h-24 rounded-full"
                height="100"
                src="/images/team_identities/nde.png"
                style={{
                  aspectRatio: '100/100',
                  objectFit: 'cover',
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold">Nicolas De Leon</h3>
              <p className="text-sm text-gray-500">Fullstack Engineer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 3"
                className="w-24 h-24 rounded-full"
                height="100"
                src="/images/team_identities/av.png"
                style={{
                  aspectRatio: '100/100',
                  objectFit: 'cover',
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold">Agustin Vazquez</h3>
              <p className="text-sm text-gray-500">Fullstack Engineer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 4"
                className="w-24 h-24 rounded-full"
                height="100"
                src="/images/team_identities/se.png"
                style={{
                  aspectRatio: '100/100',
                  objectFit: 'cover',
                }}
                width="100"
              />
              <h3 className="text-lg font-semibold">Santiago Echeverria</h3>
              <p className="text-sm text-gray-500">Product Owner</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PlugIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 1-4 4h-4a4 1-4-4V8Z" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0-4-4H9a4 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
