import { Link } from "@/navigation";
import Constants from "@/data/Constants";

export default function CareCenterLandingPage() {
  return (
    <div className="care-page">

      {/* HERO 3D SECTION */}
      <section className="hero-3d text-center mt-7">
        <div className="container">
          <div className="hero-card-3d p-5 rounded-5">

            <h2 className="hero-title">
              Suzuki Fatehjang Motors Care Center
            </h2>

            <p className="hero-text mt-3">
              Expert car care and maintenance services to keep your Suzuki running smoothly.
            </p>

             <Link
            href={"tel:" + Constants.Insurance}
            className="btn border btn-green btn-with-icon rounded-pill  "
          >
            <i className="bi bi-telephone-fill"></i>
            Contact Us
          </Link>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-3d">
        <div className="container text-center">

          <h3 className="section-title mt-3">
            Why Choose Our Care Center?
          </h3>

          <div className="row g-4 mt-1">

            <div className="col-md-4 ">
              <div className="feature-card-3d p-4 rounded-4">
                <i className="bi bi-tools feature-icon"></i>
                <h5 className="mt-3">Certified Technicians</h5>
                <p>Expert hands ensuring your car stays in perfect condition.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card-3d p-4 rounded-4">
                <i className="bi bi-clock-history feature-icon"></i>
                <h5 className="mt-3">Quick Service</h5>
                <p>Fast and efficient service with minimal waiting time.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card-3d p-4 rounded-4">
                <i className="bi bi-shield-check feature-icon"></i>
                <h5 className="mt-3">Genuine Parts</h5>
                <p>Only original Suzuki parts for long-lasting performance.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section className="booking-3d text-center py-5">
        <div className="container">

          <div className="booking-card-3d p-5 rounded-5">

            <h2>Schedule Your Service Today</h2>

            <p className="mt-3">
              Let our experts take care of your Suzuki. Book your appointment now.
            </p>

            <Link
              href={"tel:" + Constants.CRO2}
              className="btn booking-btn mt-4 btn-lg rounded-pill"
            >
              Book Service Now
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}