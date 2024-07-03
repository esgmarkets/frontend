import Link from "next/link";

export default function FooterSocial() {
  return (
    <>
      <div className="social-widget text-center text-md-end">
        <div className="social-style1">
          <Link className="text-white me-2 fw500 fz17" href="/">
            Follow us
          </Link>
          <a href="https://x.com/islamic_markets">
            <i className="fab fa-x list-inline-item" />
          </a>
          <a href="https://t.me/s/islamic_markets">
            <i className="fab fa-telegram list-inline-item" />
          </a>
          <a href="https://www.linkedin.com/company/islamicmarkets/">
            <i className="fab fa-linkedin-in list-inline-item" />
          </a>
        </div>
      </div>
    </>
  );
}
