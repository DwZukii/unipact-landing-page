// Enquiries go to the Google Apps Script sheet the platform's own lead form uses, so every lead
// lands in one list and emails the team. The script only stores the fields it knows for each
// lead_type, so anything extra has to travel inside one of those fields.
const ENDPOINT =
  process.env.NEXT_PUBLIC_LEADS_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycby-N6kcIULA32Ltht_7F6PVnMCfneqplIV_iNR5uri7IlQawXbDk8Zstv8CvSyws9sd9g/exec";

export interface CompanyLead {
  company_name: string;
  contact_person: string;
  corp_email: string;
  scope_needed: string;
}

// The sheet cannot send CORS headers, so the request goes out in no-cors mode and the browser
// hides the response: a resolved promise means the request left the browser, not that it was stored.
export async function submitCompanyLead(lead: CompanyLead) {
  const body = new FormData();
  Object.entries({ ...lead, lead_type: "Company_Leads" }).forEach(([field, value]) => body.append(field, value));
  await fetch(ENDPOINT, { method: "POST", body, mode: "no-cors" });
}
