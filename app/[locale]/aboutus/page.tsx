import Image from "next/image";
import Moazzmpic from "./WhatsApp Image 2026-06-03 at 2.21.34 PM.jpeg";
import Team from "./team";
import { getTranslations } from "next-intl/server";

export default async function AboutUspage() {
  const t = await getTranslations({ namespace: "page.about" });

  return (
    <>
      <section className="py-15 py-xl-20 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div
              className="col-md-8 col-lg-5 mb-5 mb-xl-0"
              data-aos-delay="100"
            >
              <Image
                src={Moazzmpic}
                alt="awais_image"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2> {t("name1")} </h2>
              <ul className="list-group list-group-separated">
                <li className="list-group-item py-4">
                  <p className="text-muted lead">
                    <span className="text-black">{t("dir")} </span> {t("msg1")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        
      </section>

      <Team />
      <br />
      <br />
    </>
  );
}
