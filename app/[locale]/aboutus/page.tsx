import Image from "next/image";
import Moazzmpic from "./pictures/WhatsApp Image 2026-06-03 at 2.21.34 PM.jpeg";
import Team from "./team";
import { getTranslations } from "next-intl/server";

export default async function AboutUspage() {
  const t = await getTranslations({ namespace: "page.about" });

  return (
    <>
      {/* HERO ABOUT SECTION */}
      <section className="py-20 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* IMAGE SIDE */}
            <div className="col-lg-6">
              <div className="position-relative">
                <Image
                  src={Moazzmpic}
                  alt="about image"
                  width={700}
                  height={600}
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6">
             

              <h2 className="fw-bold mb-3">
                {t("name1")}
              </h2>

              <p className="text-muted fs-5 mb-4">
                <span className="fw-semibold text-dark">{t("dir")}</span>{" "}
                {t("msg1")}
              </p>

             
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}

        

          {/* TEAM COMPONENT */}
          <Team />

    </>
  );
}