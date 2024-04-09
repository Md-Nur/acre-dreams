import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <p className="text-5xl font-extrabold">
          Acre Dreams
          <br />
          <span className="text-lg font-semibold">
            Providing reliable land since 1992
          </span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services For Buyers</h6>
        <a className="link link-hover">Targeted Land Search</a>
        <a className="link link-hover">Market Analysis and Due Diligence</a>
        <a className="link link-hover">Negotiation and Closing Assistance</a>
        <a className="link link-hover">Financing Options</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services For Sellers</h6>
        <a className="link link-hover">Land Valuation and Marketing</a>
        <a className="link link-hover">Permits and Zoning Regulations</a>
        <a className="link link-hover">Competitive Market Analysis</a>
        <a className="link link-hover">Negotiation and Closing Expertise</a>
      </nav>
      <nav>
        <h6 className="footer-title">Additional Services</h6>
        <a className="link link-hover">Land Use Planning and Development</a>
        <a className="link link-hover">Ongoing Support</a>
      </nav>
    </footer>
  );
};

export default Footer;
