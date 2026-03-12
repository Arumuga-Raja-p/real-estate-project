import emailjs from "emailjs-com";

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  subject: string;
  message: string;
  source: "quick-enquiry-modal" | "contact-page";
}

const inquiryTypeLabels: Record<string, string> = {
  buy: "Buying Property",
  buying: "Buying Property",
  sell: "Selling Property",
  selling: "Selling Property",
  construction: "Building Construction",
  management: "Property Management",
  consultation: "Free Consultation",
  other: "Other",
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const receiverEmail =
  process.env.NEXT_PUBLIC_ENQUIRY_RECEIVER_EMAIL ||
  "arumugarajap007@gmail.com";

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local."
    );
  }

  const inquiryTypeLabel =
    inquiryTypeLabels[payload.inquiryType] || payload.inquiryType;

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: receiverEmail,
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      phone: payload.phone?.trim() || "Not provided",
      inquiry_type: inquiryTypeLabel,
      subject: payload.subject,
      message: payload.message,
      source: payload.source,
      submitted_at: submittedAt,
    },
    publicKey
  );
}
