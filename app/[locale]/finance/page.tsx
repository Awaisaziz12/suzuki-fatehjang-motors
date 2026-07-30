
import { CarBookingForm } from "../common/booking-form-new-cars";
import { FinanceBookingForm } from "../common/bookingfinance";

export default function Finance() {
  return (
    <section className="finance-page py-5 bg-light">
      <div className="container ">

        {/* Heading */}
        <div className="text-center mb-5"  style={{
    background: "linear-gradient(135deg, #ffffff, #f3f6fa)",
    borderRadius: "24px",
    boxShadow:
      "0 20px 45px rgba(0,0,0,0.12), inset 0 2px 6px rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,255,255,0.7)",
    transform: "perspective(1000px) rotateX(2deg)",
    backdropFilter: "blur(10px)",
    maxWidth: "1300px",
    margin: "0 auto",
    padding :"1.5rem",
  }}>
          

          <h1 className="fw-bold display-3"  style={{
      color: "#222",
      textShadow: "2px 2px 8px rgba(0,0,0,0.15)",
    }}>
             Lease & Finance
          </h1>

          <p className="text-muted col-lg-8 mx-auto">
            We make vehicle ownership simple and affordable through
            flexible financing and leasing solutions tailored to your needs.
          </p>
    <FinanceBookingForm/>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {/* Lease */}
          <div className="col-md-6">
            <div
              className="p-5 h-100 rounded-4 bg-white"
              style={{
                boxShadow: "0 15px 40px rgba(0,0,0,.08)",
                transition: ".3s",
              }}
            >
              <div className="mb-4">
                <i className="bi bi-car-front-fill display-4 text-warning"></i>
              </div>

              <h3 className="fw-bold mb-3">
                Vehicle Leasing
              </h3>

              <p className="text-muted">
                Drive your dream Suzuki with convenient monthly lease
                installments. Our leasing plans are designed to provide
                affordability, flexibility, and peace of mind.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  ✅ Low monthly payments
                </li>
                <li className="mb-2">
                  ✅ Flexible tenure options
                </li>
                <li className="mb-2">
                  ✅ Quick approval process
                </li>
                <li>
                  ✅ Easy documentation
                </li>
              </ul>
            </div>
          </div>

          {/* Finance */}
          <div className="col-md-6">
            <div
              className="p-5 h-100 rounded-4 bg-white"
              style={{
                boxShadow: "0 15px 40px rgba(0,0,0,.08)",
              }}
            >
              <div className="mb-4">
                <i className="bi bi-bank display-4 text-warning"></i>
              </div>

              <h3 className="fw-bold mb-3">
                Auto Financing
              </h3>

              <p className="text-muted">
                We work with trusted financial partners to help you get
                competitive financing options for your next Suzuki vehicle.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  ✅ Bank financing assistance
                </li>
                <li className="mb-2">
                  ✅ Competitive markup rates
                </li>
                <li className="mb-2">
                  ✅ Fast processing
                </li>
                <li>
                  ✅ Professional guidance
                </li>
              </ul>

            </div>
          </div>

        </div>

        {/* Why Choose Us */}
        <div
          className="mt-5 p-5 rounded-4 bg-white text-center"
          style={{
            boxShadow: "0 15px 40px rgba(0,0,0,.08)",
          }}
        >
          <h2 className="fw-bold mb-3">
            Why Choose Suzuki Fatehjang Motors?
          </h2>

          <p className="text-muted mx-auto col-lg-8">
            Our experienced team helps you select the most suitable
            financing or leasing option with transparent guidance and
            hassle-free processing.
          </p>

                                 <CarBookingForm/>

        </div>

      </div>
    </section>
  );
}