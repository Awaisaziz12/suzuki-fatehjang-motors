
const ComingSoon = () => {
  return (
    <section className="cs-section d-flex flex-col items-center justify-center text-center">

      {/* BACKGROUND */}
      <div className="cs-bg"></div>

      {/* FLOATING SHAPES */}
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>

      <div className="container cs-container d-flex flex-col items-center justify-center text-center">

        

        {/* GLASS CARD */}
        <div className="glass-card">

          <h1>Coming Soon</h1>

          <p>
            We’re building something powerful & modern.
            Stay tuned for launch 🚀
          </p>

          {/* COUNTDOWN */}
          <div className="countdown">
            <div><span>12</span>Days</div>
            <div><span>08</span>Hours</div>
            <div><span>45</span>Mins</div>
            <div><span>30</span>Sec</div>
          </div>

          {/* INPUT */}
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Notify Me</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComingSoon;