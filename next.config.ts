import type { NextConfig } from "next";

const APP_URL = "https://app.unipact.my";

// 307 rather than 308: browsers cache a permanent redirect indefinitely, which would
// make it painful to bring these pages back if the signup funnel changes again.
const toStudentSignup = { destination: `${APP_URL}/register/student`, permanent: false };

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/apply-company.html", destination: "/apply-company", permanent: true },
      { source: "/apply-software-developer", ...toStudentSignup },
      { source: "/apply-digital-marketing", ...toStudentSignup },
      { source: "/apply-software-developer.html", ...toStudentSignup },
      { source: "/apply-digital-marketing.html", ...toStudentSignup },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      {
        source: "/hire-student-software-developers-in-san-francisco.html",
        destination: "/hire-student-software-developers-in-san-francisco",
        permanent: true,
      },
      {
        source: "/hire-student-software-developers-in-new-york.html",
        destination: "/hire-student-software-developers-in-new-york",
        permanent: true,
      },
      {
        source: "/student-digital-marketing-freelancers-in-austin.html",
        destination: "/student-digital-marketing-freelancers-in-austin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
