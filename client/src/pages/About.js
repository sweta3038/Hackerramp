import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
          Value proposition
Myntra's value proposition revolves around giving consumers the power and ease of purchasing fashion and lifestyle products online. Offerings such as the largest in-season product catalogue, 100% authentic products, cash on delivery and 30 day return policy make Myntra, the preferred shopping destination in the country. To make online shopping easier for you, a dedicated customer connect team is on standby to answer your queries 24x7.

Brands
Myntra understands its shoppers' needs and caters to them with choice of apparel, accessories, cosmetics and footwear from over 500 leading Indian and international brands. Prominent brands include Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK, Timberland, Avirate, FabIndia and Biba to name a few. You can also shop from some recently introduced labels such as - Roadster, Sher Singh, Dressberry, Kook N Keech and ETC.

Recognitions
Awarded 'Fashion eRetailer of the Year 2013' by Franchise India – Indian eRetail Awards
Awarded 'Best E-commerce Website for 2012' by IAMAI – India Digital Awards
Awarded 'Images Most Admired Retailer of the Year: Non–Store Retail' for 2012 by Images Group
Awarded 'Best E-commerce Partner of the year 2011-12' by Puma India
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
