import type { NextConfig } from "next";

const APP_URL = "https://app.unipact.my";

// 307 rather than 308: browsers cache a permanent redirect indefinitely, which would
// make it painful to bring these pages back if the signup funnel changes again.
const toStudentSignup = { destination: `${APP_URL}/register/student`, permanent: false };

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/apply-company.html", destination: `${APP_URL}/register/company`, permanent: false },
      { source: "/apply-company", destination: `${APP_URL}/register/company`, permanent: false },
      { source: "/apply-software-developer", ...toStudentSignup },
      { source: "/apply-digital-marketing", ...toStudentSignup },
      { source: "/apply-software-developer.html", ...toStudentSignup },
      { source: "/apply-digital-marketing.html", ...toStudentSignup },
      // The per-city pages are gone for good and their audience is served by
      // /clients. 308 so the consolidation is passed on and the old URLs drop
      // out of the index. The :city segment also catches their .html variants.
      { source: "/hire-student-software-developers-in-:city", destination: "/clients", permanent: true },
      { source: "/student-digital-marketing-freelancers-in-:city", destination: "/clients", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
