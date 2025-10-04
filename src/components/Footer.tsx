import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "Help", href: "#help" },
    { name: "Blog", href: "#blog" },
    { name: "Developers", href: "#developers" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Press", href: "#press" },
    { name: "Privacy Notice for California Users", href: "#privacy-ca" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-gray-400">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-center lg:text-right whitespace-nowrap">
            © Automattic
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
