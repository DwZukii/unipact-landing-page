export type Faq = { q: string; a: string };

// Shown on the pages and also emitted as FAQPage schema, so the two cannot drift apart.

export const HOME_FAQS: Faq[] = [
  {
    q: "How much does a project cost?",
    a: "There is no fixed price list, because every project is scoped on its own. You set a budget or ask us for a quote, and the price is agreed in writing before any work starts. Posting is free, and UniPact’s service fee, 10% as standard, comes out of that price.",
  },
  {
    q: "Who are the students, and how are they verified?",
    a: "Students at Malaysian universities. Each one registers with their university details and a student ID or enrolment letter, and a UniPact admin checks their status before they can be matched to a project.",
  },
  {
    q: "Do I get to choose the team?",
    a: "A UniPact admin picks the team for your brief based on skills and track record, and proposes it within 48 hours. You review their profiles and portfolios, and nothing starts until you approve.",
  },
  {
    q: "What if I am not happy with the work?",
    a: "Every deliverable includes 2 rounds of minor revisions. You have 5 working days after each delivery to accept it or ask for changes; after that it counts as accepted. If a milestone still cannot be delivered to the brief, its payment is refunded in full.",
  },
  {
    q: "How do I follow progress?",
    a: "Every client gets a workspace on the UniPact platform: your team, each milestone and the work submitted against it, your payments and what is still in escrow, your files, and one message thread with the team and UniPact.",
  },
  {
    q: "Do you work with companies outside Malaysia?",
    a: "Most of our clients today are Malaysian businesses. If you are based elsewhere, send us an enquiry and we will tell you whether we can support your project.",
  },
];

export const SME_FAQS: Faq[] = [
  {
    q: "Do your creators come to my shop or clinic to film?",
    a: "Yes. For cafés, shops and clinics across the Klang Valley (KL and Selangor) and major university towns, our student creator teams film on site with professional mobile rigs, lighting and wireless microphones.",
  },
  {
    q: "How fast is the turnaround from filming to the final edit?",
    a: "Standard edits are delivered within 48 to 72 hours per batch. For e-commerce ads we prioritise quick variations, so you can refresh TikTok and Shopee campaigns before ad fatigue sets in.",
  },
  {
    q: "How does this compare with hiring a full-time marketing staff member?",
    a: "A junior marketing executive costs RM 3,000–4,500 a month plus EPF, SOCSO and equipment, and one person is rarely good at shooting, scripting, editing and analytics all at once. UniPact gives you a specialised campus squad at package rates, with no long-term payroll.",
  },
  {
    q: "What if I’m shy or don’t know what to say on camera?",
    a: "That is our speciality. For the Clinic and authority package, our team writes simple, conversational scripts. During filming we guide you through short talking points, or record voiceovers, so you come across confident and natural.",
  },
  {
    q: "Are invoices and payments officially registered?",
    a: "Yes. UniPact is registered with Suruhanjaya Syarikat Malaysia (SSM no. 202603205508). Every milestone is held in escrow and invoiced with official documentation.",
  },
];

export const CLIENTS_FAQS: Faq[] = [
  {
    q: "How does milestone escrow protect my company?",
    a: "You never pay an unverified contractor upfront. When a milestone is agreed, the payment goes into escrow. The student starts work, and the money is released only after you test and approve the deliverable.",
  },
  {
    q: "Are the students fluent in English?",
    a: "Yes. Malaysia ranks among Asia’s most English-proficient countries (High Proficiency in the EF English Proficiency Index). Every developer and creator on UniPact is vetted on communication, and writes clear English documentation, commit messages and scripts.",
  },
  {
    q: "How do time zones work for US, UK and European clients?",
    a: "We work asynchronously. You send instructions or feedback in your evening, the team builds while you sleep, and working code or videos are ready by your morning. Singapore and Australian clients share almost the same working hours.",
  },
  {
    q: "Who owns the intellectual property and source code?",
    a: "You do, fully. Once the final milestone is signed off and paid, all source code, repository access, design files and raw media are transferred to your company.",
  },
  {
    q: "What if a deliverable doesn’t match the agreed brief?",
    a: "Payments are tied to clear milestone criteria, so the student revises the work until it meets the brief. If work is not delivered or is abandoned, your escrow funds are refunded.",
  },
];

// Student pages, in Bahasa Malaysia. Every claim here is one the live site or the platform
// already makes; none quotes an income figure.
export const STUDENT_HUB_FAQS: Faq[] = [
  {
    q: "Apakah UniPact dan bagaimana pelajar mendapat bayaran?",
    a: "UniPact ialah platform Malaysia yang memadankan pasukan pelajar universiti yang disahkan dengan projek perisian dan pemasaran digital daripada syarikat. Kerja dibahagi kepada milestone dan anda dibayar melalui pindahan bank selepas setiap milestone diterima. UniPact berdaftar dengan SSM (no. 202603205508).",
  },
  {
    q: "Siapa yang boleh mendaftar sebagai pelajar?",
    a: "Pelajar universiti yang aktif dan berumur 18 tahun ke atas. Borang pendaftaran menyenaraikan UM, USM, UKM, UPM, UTM, UiTM, Taylor’s, Sunway, Monash Malaysia, APU, MMU dan UCSI, serta pilihan Other Institution untuk institusi lain. Admin UniPact menyemak status pelajar anda sebelum anda dipadankan dengan projek, dan memuat naik ID pelajar atau surat tawaran mempercepatkan proses ini.",
  },
  {
    q: "Adakah saya memerlukan pengalaman kerja?",
    a: "Tidak perlu pengalaman kerja formal. Projek kelas, projek sampingan dan akaun media sosial yang anda urus semuanya dikira. Nyatakan kemahiran anda semasa mendaftar supaya admin dapat memadankan anda dengan projek yang sesuai.",
  },
  {
    q: "Bila dan bagaimana saya dibayar?",
    a: "Klien membiayai setiap milestone ke dalam escrow sebelum kerja bermula. Anda dibayar melalui pindahan bank dalam tempoh 7 hari bekerja selepas milestone itu diterima oleh klien. Jumlah bayaran anda dinyatakan dalam tawaran kerja sebelum anda menerimanya.",
  },
  {
    q: "Adakah saya pekerja UniPact?",
    a: "Tidak. Anda bekerja sebagai kontraktor bebas dan memilih tawaran kerja yang anda mahu terima. Setiap tawaran menyatakan hasil kerja, tarikh akhir dan bayaran anda sebelum anda bersetuju. Anda bertanggungjawab ke atas cukai pendapatan sendiri. Semua terma terdapat dalam Perjanjian Bakat yang anda setujui semasa mendaftar.",
  },
  {
    q: "Bolehkah saya membawa rakan sekelas ke dalam pasukan saya?",
    a: "Boleh. Anda boleh membawa rakan sekelas ke dalam pasukan anda dengan pembahagian bayaran yang dipersetujui. Admin UniPact tetap mencadangkan pasukan kepada klien, dan klien meluluskannya sebelum kerja bermula.",
  },
  {
    q: "Bolehkah saya buat kerja ini sambil belajar sepenuh masa?",
    a: "Boleh, kerana tarikh akhir dinyatakan dalam tawaran sebelum anda menerimanya, jadi anda boleh menilai sama ada ia muat dengan jadual kuliah dan peperiksaan anda. Jika anda tidak dapat menyiapkan kerja yang telah diterima, beritahu UniPact seawal mungkin supaya pengganti dapat ditetapkan.",
  },
  {
    q: "Bolehkah saya letakkan projek UniPact dalam portfolio?",
    a: "Setiap projek yang diluluskan ditambah ke rekod pelajar anda yang disahkan, dan anda boleh berkongsinya dengan majikan. Untuk memaparkan karya sebenar dalam portfolio, klien perlu meluluskannya secara bertulis terlebih dahulu. Jika tidak, rekod hanya menunjukkan jenis kerja dan hasilnya.",
  },
  {
    q: "Adakah saya pasti mendapat projek selepas mendaftar?",
    a: "Tidak dijamin. UniPact menawarkan kerja kepada anda apabila ada projek klien yang sesuai dengan trek dan kemahiran anda, jadi lengkapkan profil anda dengan kemahiran yang tepat.",
  },
];

export const STUDENT_DEV_FAQS: Faq[] = [
  {
    q: "Apakah jenis projek perisian yang dikerjakan pelajar UniPact?",
    a: "Projek sebenar untuk syarikat Malaysia. Contohnya sistem CRM jualan untuk sebuah agensi perunding kewangan, aplikasi operasi pusat tuisyen, aplikasi tablet untuk pereka dalaman, dan sistem pendaftaran acara dengan pas QR. Pilih trek Software development, atau Both, semasa mendaftar.",
  },
  {
    q: "Kemahiran apa yang perlu saya nyatakan semasa mendaftar?",
    a: "Taip kemahiran anda dipisahkan dengan koma, contohnya React, Python atau Flutter, dan nyatakan bahasa serta rangka kerja yang anda benar-benar boleh gunakan. Admin menggunakan senarai ini untuk memadankan anda dengan projek.",
  },
  {
    q: "Adakah saya perlu membaiki pepijat selepas projek siap?",
    a: "Ya. Untuk kerja perisian, anda membaiki pepijat dalam kerja anda selama 30 hari selepas klien menerimanya, tanpa bayaran tambahan. Ini sebahagian daripada jaminan 30 hari yang ditawarkan kepada klien.",
  },
  {
    q: "Berapa banyak semakan semula yang perlu saya lakukan?",
    a: "Setiap hasil kerja termasuk sehingga 2 pusingan semakan kecil yang selari dengan arahan projek.",
  },
];

export const STUDENT_CREATOR_FAQS: Faq[] = [
  {
    q: "Apakah jenis kerja yang dibuat kreator UniPact?",
    a: "Video pendek untuk TikTok, Instagram Reels dan YouTube Shorts, penyuntingan video, kandungan media sosial, copywriting dan kandungan kempen. Untuk perniagaan kecil, pasukan juga hadir di lokasi dengan rig mudah alih 4K untuk merancang konsep, merakam dan menyunting.",
  },
  {
    q: "Siapa klien untuk kerja video dan pemasaran?",
    a: "Kebanyakan klien UniPact hari ini ialah perniagaan Malaysia, seperti kafe dan kedai runcit, penjual Shopee dan TikTok Shop, serta klinik.",
  },
  {
    q: "Berapa lama masa untuk menyiapkan video?",
    a: "Untuk klien perniagaan Malaysia, sunting standard dijangka siap dalam 48 hingga 72 jam bagi setiap kelompok. Tarikh akhir sebenar dinyatakan dalam tawaran kerja sebelum anda menerimanya.",
  },
  {
    q: "Bolehkah saya tunjuk video yang saya hasilkan dalam portfolio?",
    a: "Hanya selepas klien meluluskannya secara bertulis. Sementara itu, projek yang diluluskan tetap masuk ke rekod pelajar anda yang disahkan, yang menunjukkan jenis kerja dan hasilnya.",
  },
  {
    q: "Kemahiran apa yang perlu saya nyatakan semasa mendaftar?",
    a: "Pilih trek Digital marketing, atau Both, dan taip kemahiran anda dipisahkan dengan koma, contohnya penyuntingan video, copywriting atau pengurusan media sosial. Admin menggunakannya untuk memadankan anda dengan projek.",
  },
];
