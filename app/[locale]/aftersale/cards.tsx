"use client";

import Link from "next/link";

const aftersaleConfig = {
  title: "After Sales",
  sections: [
    {
      icon: "bi-gear-fill",
      title: "Mechanical Workshop",
      description:
        "Professional maintenance and diagnostics by certified Suzuki technicians using genuine parts for maximum reliability.",
      link: "/en/aftersale/service",
      linkText: "Learn More",
    },
    {
      icon: "bi-shield-check",
      title: "Extended Warranty",
      description:
        "Protect your vehicle with flexible extended warranty plans designed for long-term peace of mind.",
      link: "/",
      linkText: "Learn More",
    },
    {
      icon: "bi-paint-bucket",
      title: "Paint & Body Shop",
      description:
        "High-quality paint and body repair services to restore your car to factory condition with precision.",
      link: "/en/aftersale/bodyshop",
      linkText: "Learn More",
    },
  ],
};

export default function Cards() {
  return (
    <section className="aftersale-section">
      <div className="container">

        {/* Heading */}
        <div className="heading text-center">
          <h2>{aftersaleConfig.title}</h2>
          <p>Trusted after sales support for your Suzuki vehicle</p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {aftersaleConfig.sections.map((section, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="service-card">

                <div className="icon-box">
                  <i className={`bi ${section.icon}`}></i>
                </div>

                <h4>{section.title}</h4>

                <p>{section.description}</p>

                <Link href={section.link} className="btn-link">
                  {section.linkText} →
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .aftersale-section {
          background: #f6f8fb;
          padding: 80px 0;
        }

        .heading {
          margin-bottom: 50px;
        }

        .heading h2 {
          font-size: 38px;
          font-weight: 700;
          color: #111;
        }

        .heading p {
          color: #6c757d;
          margin-top: 8px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 16px;
          padding: 30px 25px;
          text-align: center;
          height: 100%;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: #0d6efd;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .icon-box {
          width: 70px;
          height: 70px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #eef4ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-box i {
          font-size: 28px;
          color: #0d6efd;
        }

        .service-card h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111;
        }

        .service-card p {
          font-size: 14px;
          color: #6c757d;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .btn-link {
          color: #0d6efd;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .btn-link:hover {
          color: #003ecb;
        }
      `}</style>
    </section>
  );
}