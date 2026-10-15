export const APP_URL = "https://app.unipact.my";

export const LINKS = {
  postProject: `${APP_URL}/register/company`,
  joinStudent: `${APP_URL}/register/student`,
  login: `${APP_URL}/login`,
  clientAgreement: `${APP_URL}/agreements/client`,
  talentAgreement: `${APP_URL}/agreements/talent`,
};

export const CONTACT_EMAIL = "unipact.my@gmail.com";
export const SSM_NUMBER = "202603205508";

export const TEAM = [
  { name: "Azizi Sahari", role: "Project Lead & Chief Developer", email: "azizi.sahari@unipact.com.my" },
  { name: "Mohamed Naqiib", role: "Head of Business Strategy", email: "naqiib@unipact.com.my" },
  { name: "Akif Najmi", role: "Head of Marketing & Growth", email: "akif.najmi@unipact.com.my" },
];

// The /team page. Photos are 360 x 450 crops in public/team. `talent` is the delivery
// team a person works in, matching UniPact's two services.
export type Talent = "Software Development" | "Digital Marketing";

export const CORE_TEAM: { name: string; role: string; talent?: Talent; photo: string }[] = [
  { name: "Azizi Sahari", role: "Project Lead & Chief Developer", talent: "Software Development", photo: "/team/azizi.webp" },
  { name: "Mohamed Naqiib", role: "Head of Business Strategy", photo: "/team/naqib.webp" },
  { name: "Akif Najmi", role: "Head of Marketing & Growth", photo: "/team/akif.webp" },
  { name: "Adam Haikal", role: "Operations & Project Coordinator", talent: "Software Development", photo: "/team/adam.webp" },
  { name: "Muhammad Luqman", role: "Head of Media & Content Strategy", talent: "Digital Marketing", photo: "/team/luqman-portrait.webp" },
];

// Talents without a photo yet show their initial instead. Miki, Dinie and Adam are
// short names until their full names come in.
export const TALENTS: { name: string; talent: Talent; photo?: string }[] = [
  { name: "Amir Hakimi", talent: "Software Development", photo: "/team/amir.webp" },
  { name: "Dinie", talent: "Software Development" },
  { name: "Adam", talent: "Software Development" },
  { name: "Amirul Eiman", talent: "Software Development", photo: "/team/amirul.webp" },
  { name: "Aliff Aiman", talent: "Digital Marketing", photo: "/team/aliff.webp" },
  { name: "Alya Zahirah", talent: "Digital Marketing", photo: "/team/alya.webp" },
  { name: "Raziq Syahmee", talent: "Digital Marketing", photo: "/team/raziq.webp" },
  { name: "Miki", talent: "Digital Marketing" },
];

export const NAV_LINKS = [
  { href: "/#proof", label: "Our work" },
  { href: "/#services", label: "Services" },
  { href: "/sme", label: "For SMEs" },
  { href: "/clients", label: "Global clients" },
  { href: "/team", label: "Team" },
];

// Digits only, with the country code and no plus sign, e.g. "60123456789".
// Leave empty to hide the WhatsApp button.
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_LINK = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : null;
