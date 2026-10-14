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
  { name: "Azizi bin Sahari", role: "Project Lead & Chief Developer", email: "azizi.sahari@unipact.com.my" },
  { name: "Naqib", role: "Head of Business Strategy", email: "naqiib@unipact.com.my" },
  { name: "Akif Najmi", role: "Head of Marketing & Growth", email: "akif.najmi@unipact.com.my" },
];

// Everyone on the /team page. Photos are 360 x 450 crops in public/team. `talent` is the
// delivery team a person also works in, matching UniPact's two services.
export type Talent = "Software Development" | "Digital Marketing";

export const PEOPLE: { name: string; role: string; talent?: Talent; photo: string }[] = [
  { name: "Azizi", role: "Project Lead & Chief Developer", talent: "Software Development", photo: "/team/azizi.webp" },
  { name: "Naqib", role: "Head of Business Strategy", photo: "/team/naqib.webp" },
  { name: "Akif", role: "Head of Marketing & Growth", photo: "/team/akif.webp" },
  { name: "Adam", role: "Operations & Project Coordinator", talent: "Software Development", photo: "/team/adam.webp" },
  { name: "Luqman", role: "Head of Media & Content Strategy", talent: "Digital Marketing", photo: "/team/luqman.webp" },
  { name: "Aliff", role: "Media & Content", talent: "Digital Marketing", photo: "/team/aliff.webp" },
  { name: "Alya", role: "Media & Content", talent: "Digital Marketing", photo: "/team/alya.webp" },
];

export const NAV_LINKS = [
  { href: "/#proof", label: "Our work" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/team", label: "Team" },
  { href: "/#students", label: "For students" },
];

// Digits only, with the country code and no plus sign, e.g. "60123456789".
// Leave empty to hide the WhatsApp button.
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_LINK = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : null;
