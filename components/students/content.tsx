import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { STUDENT_CREATOR_FAQS, STUDENT_DEV_FAQS, STUDENT_HUB_FAQS, type Faq } from "@/lib/faqs";
import { LINKS, SOCIAL_IMAGE } from "@/lib/site";

// The student pages are in Bahasa Malaysia. Wording follows what the live site and the
// platform already promise, and quotes no earnings.

export type Block = { id: string; title: string; lead?: string; items: ReactNode[] };

export type StudentPageContent = {
  path: string;
  metaTitle: string;
  description: string;
  crumbs: { name: string; path: string }[];
  hero: { title: string; accent: string; text: string; ticks: string[] };
  blocks: Block[];
  faqs: Faq[];
};

export const STUDENT_STEPS = [
  {
    title: "Daftar dan sahkan status pelajar",
    text: "Isi butiran universiti, kursus dan kemahiran anda. Memuat naik ID pelajar atau surat tawaran mempercepatkan pengesahan oleh admin UniPact.",
  },
  {
    title: "Dipadankan dengan projek",
    text: "Apabila ada projek klien yang sesuai, UniPact menawarkan kerja kepada anda. Setiap tawaran menyatakan hasil kerja, tarikh akhir dan bayaran anda.",
  },
  {
    title: "Siapkan kerja ikut milestone",
    text: "Kerja dibahagi kepada milestone. Anda dan pasukan menyiapkannya mengikut arahan projek, dengan sehingga 2 pusingan semakan kecil.",
  },
  {
    title: "Dibayar selepas milestone diterima",
    text: "Bayaran klien disimpan dalam escrow, dan anda dibayar melalui pindahan bank dalam tempoh 7 hari bekerja selepas setiap milestone diterima.",
  },
];

const ELIGIBILITY =
  "Anda mesti pelajar universiti yang aktif dan berumur 18 tahun ke atas. UniPact mengesahkan status pelajar anda.";
const CONTRACTOR =
  "Anda bekerja sebagai kontraktor bebas, bukan pekerja UniPact atau klien, dan bertanggungjawab ke atas cukai pendapatan sendiri.";

const hubPath = "/pelajar";
const developerPath = "/pelajar/pembangun";
const creatorPath = "/pelajar/kreator";

const alsoSee = (...links: { href: string; label: string; text: string }[]): Block => ({
  id: "lihat-juga",
  title: "Lihat juga",
  items: links.map(({ href, label, text }) => (
    <>
      <Link href={href}>{label}</Link>: {text}
    </>
  )),
});

export const HUB: StudentPageContent = {
  path: hubPath,
  metaTitle: "Kerja Freelance untuk Pelajar Universiti di Malaysia | UniPact",
  description:
    "Dapat bayaran daripada projek sebenar dalam pembangunan perisian, video dan pemasaran digital sambil belajar. Daftar sebagai pelajar universiti di UniPact.",
  crumbs: [
    { name: "Utama", path: "/" },
    { name: "Pelajar", path: hubPath },
  ],
  hero: {
    title: "Kerja freelance untuk pelajar universiti:",
    accent: "projek sebenar, bayaran sebenar",
    text: "UniPact memadankan pelajar universiti di Malaysia dengan projek sebenar daripada syarikat dalam pembangunan perisian dan pemasaran digital. Anda dibayar setiap kali milestone diterima, dan setiap projek yang siap masuk ke rekod pelajar anda yang disahkan.",
    ticks: ["Projek klien sebenar", "Bayaran ikut milestone", "Boleh bawa rakan sekelas", "Rekod projek yang disahkan"],
  },
  blocks: [
    {
      id: "trek",
      title: "Pilih trek anda",
      lead: "Dua trek, satu platform. Anda boleh memilih satu daripadanya, atau kedua-duanya, semasa mendaftar.",
      items: [
        <>
          <Link href={developerPath}>Pembangun perisian</Link>: web, aplikasi mudah alih dan backend untuk syarikat
          Malaysia.
        </>,
        <>
          <Link href={creatorPath}>Kreator video dan pemasaran digital</Link>: video pendek untuk TikTok, Instagram
          Reels dan YouTube Shorts, kandungan media sosial dan copywriting.
        </>,
      ],
    },
    {
      id: "apa-anda-dapat",
      title: "Apa yang anda dapat",
      items: [
        "Projek klien sebenar, bukan latihan kelas, daripada sistem CRM kepada video produk.",
        "Bayaran ikut milestone melalui pindahan bank.",
        "Bawa rakan sekelas ke dalam pasukan anda, dengan pembahagian bayaran yang dipersetujui.",
        "Setiap projek yang diluluskan ditambah ke rekod pelajar anda yang disahkan, yang boleh anda kongsi dengan majikan.",
        "Karya sebenar boleh dipaparkan dalam portfolio selepas klien meluluskannya secara bertulis.",
      ],
    },
    {
      id: "sebelum-mendaftar",
      title: "Sebelum anda mendaftar",
      lead: "Perkara yang patut anda tahu dahulu.",
      items: [
        ELIGIBILITY,
        CONTRACTOR,
        "Padanan bergantung pada projek klien yang ada dan kemahiran anda, jadi pendaftaran tidak menjamin projek.",
        <>
          Baca <a href={LINKS.talentAgreement}>Perjanjian Bakat</a> sebelum menerima kerja pertama anda.
        </>,
      ],
    },
  ],
  faqs: STUDENT_HUB_FAQS,
};

export const DEVELOPER: StudentPageContent = {
  path: developerPath,
  metaTitle: "Kerja Freelance Pembangun Perisian untuk Pelajar | UniPact",
  description:
    "Bina projek perisian sebenar untuk syarikat Malaysia sambil belajar. Dibayar setiap milestone melalui pindahan bank. Daftar sebagai pelajar universiti di UniPact.",
  crumbs: [
    { name: "Utama", path: "/" },
    { name: "Pelajar", path: hubPath },
    { name: "Pembangun perisian", path: developerPath },
  ],
  hero: {
    title: "Kerja freelance pembangun perisian",
    accent: "untuk pelajar universiti",
    text: "Bina projek perisian sebenar untuk syarikat Malaysia, daripada sistem CRM kepada aplikasi pentadbiran, dan dibayar setiap kali milestone diterima. Sesuai untuk pelajar sains komputer, IT dan kejuruteraan perisian yang mahukan pengalaman sebenar sebelum tamat belajar.",
    ticks: ["Projek perisian sebenar", "Bayaran ikut milestone", "Boleh bawa rakan sekelas", "Rekod projek yang disahkan"],
  },
  blocks: [
    {
      id: "projek",
      title: "Projek yang anda boleh kerjakan",
      lead: "Contoh kerja perisian yang pasukan pelajar UniPact telah bina atau sedang bina.",
      items: [
        "Sistem CRM jualan untuk sebuah agensi perunding kewangan.",
        "Aplikasi operasi pusat tuisyen: jadual, rekod dan pentadbiran harian.",
        "Aplikasi tablet untuk pereka dalaman: reka kabinet dalam 3D dengan harga secara langsung.",
        "Sistem pendaftaran acara dengan pas QR dan kiosk daftar masuk.",
      ],
    },
    {
      id: "perlu-tahu",
      title: "Perkara yang perlu anda tahu",
      items: [
        ELIGIBILITY,
        CONTRACTOR,
        "Anda membaiki pepijat dalam kerja anda selama 30 hari selepas klien menerimanya, tanpa bayaran tambahan.",
        "Anda berkomunikasi dengan klien melalui UniPact, dan memberitahu UniPact serta-merta jika tarikh akhir terancam.",
      ],
    },
    alsoSee(
      { href: hubPath, label: "Kerja freelance untuk pelajar", text: "gambaran penuh cara UniPact berfungsi." },
      { href: creatorPath, label: "Kreator video dan pemasaran digital", text: "jika anda lebih suka kerja kreatif." },
    ),
  ],
  faqs: STUDENT_DEV_FAQS,
};

export const CREATOR: StudentPageContent = {
  path: creatorPath,
  metaTitle: "Kerja Freelance Video & Pemasaran Digital Pelajar | UniPact",
  description:
    "Hasilkan video TikTok, Reels dan kandungan pemasaran sebenar untuk perniagaan Malaysia sambil belajar. Dibayar setiap milestone. Daftar di UniPact.",
  crumbs: [
    { name: "Utama", path: "/" },
    { name: "Pelajar", path: hubPath },
    { name: "Kreator video dan pemasaran digital", path: creatorPath },
  ],
  hero: {
    title: "Kerja freelance video dan pemasaran digital",
    accent: "untuk pelajar universiti",
    text: "Hasilkan video pendek untuk TikTok, Instagram Reels dan YouTube Shorts, serta kandungan media sosial dan kempen, untuk perniagaan sebenar di Malaysia. Anda dibayar setiap kali milestone diterima.",
    ticks: ["Kerja kreatif sebenar", "Bayaran ikut milestone", "Boleh bawa rakan sekelas", "Rekod projek yang disahkan"],
  },
  blocks: [
    {
      id: "projek",
      title: "Kerja yang anda boleh lakukan",
      lead: "Contoh kerja pemasaran dan video yang pasukan pelajar UniPact lakukan untuk klien.",
      items: [
        "Siri video sosial pendek yang menerangkan sistem perniagaan sebuah syarikat perisian Malaysia.",
        "Video TikTok, Instagram Reels dan YouTube Shorts untuk kafe, kedai dan penjual TikTok Shop.",
        "Penggambaran di lokasi dengan rig mudah alih 4K, daripada merancang konsep hingga menyunting.",
        "Copywriting dan kandungan kempen.",
      ],
    },
    {
      id: "perlu-tahu",
      title: "Perkara yang perlu anda tahu",
      items: [
        ELIGIBILITY,
        CONTRACTOR,
        "Untuk klien perniagaan Malaysia, sunting standard dijangka siap dalam 48 hingga 72 jam bagi setiap kelompok.",
        "Anda boleh paparkan video sebenar dalam portfolio hanya selepas klien meluluskannya secara bertulis.",
      ],
    },
    alsoSee(
      { href: hubPath, label: "Kerja freelance untuk pelajar", text: "gambaran penuh cara UniPact berfungsi." },
      { href: developerPath, label: "Pembangun perisian", text: "jika anda lebih suka kerja teknikal." },
    ),
  ],
  faqs: STUDENT_CREATOR_FAQS,
};

export function studentMetadata(content: StudentPageContent): Metadata {
  const url = `https://www.unipact.my${content.path}`;
  return {
    title: content.metaTitle,
    description: content.description,
    alternates: { canonical: url },
    openGraph: {
      title: content.metaTitle,
      description: content.description,
      type: "website",
      url,
      locale: "ms_MY",
      images: [SOCIAL_IMAGE],
    },
    twitter: { card: "summary_large_image" },
  };
}
