import {client} from "./sanity.client";

export type ContactCardType = "office" | "phone" | "email" | "hours";

export type ContactCard = {
  _key?: string;
  type: ContactCardType;
  title: string;
  details: string[];
  actionLabel: string;
  actionLink: string;
  embedUrl?: string;
};

export type ContactSectionData = {
  contactCards: ContactCard[];
};

export const CONTACT_SECTION_FALLBACK: ContactSectionData = {
  contactCards: [
    {
      _key: "office",
      type: "office",
      title: "Visit Our Office",
      details: [
        "No:15, Govindarajapuram 2nd street",
        "Nellikappam Road, Guduvanchery",
        "Chennai - 603 202",
      ],
      actionLabel: "Get Directions",
      actionLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1525970129046!2d80.0656730751205!3d12.833414087469428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7fad02d1cab%3A0x6a72cf4412509946!2sGreen%20Homes!5e0!3m2!1sen!2sin!4v1753284330618!5m2!1sen!2sin",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1525970129046!2d80.0656730751205!3d12.833414087469428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7fad02d1cab%3A0x6a72cf4412509946!2sGreen%20Homes!5e0!3m2!1sen!2sin!4v1753284330618!5m2!1sen!2sin",
    },
    {
      _key: "phone",
      type: "phone",
      title: "Call Us",
      details: ["+91-9543326699", "+91-9841886699"],
      actionLabel: "Call Now",
      actionLink: "tel:+919543326699",
    },
    {
      _key: "email",
      type: "email",
      title: "Email Us",
      details: ["ramesh@greenhouseproperty.com", "support@greenestate.com"],
      actionLabel: "Send Email",
      actionLink: "mailto:ramesh@greenhouseproperty.com",
    },
    {
      _key: "hours",
      type: "hours",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
      actionLabel: "Schedule Visit",
      actionLink: "https://calendar.google.com",
    },
  ],
};

export async function fetchContactSection(): Promise<ContactSectionData | null> {
  const query = `*[_type == "contactPage" && _id == "contactPage"][0]{
    "contactCards": contactCards[]{
      _key,
      type,
      title,
      details,
      actionLabel,
      actionLink,
      embedUrl
    }
  }`;

  const data = await client.fetch<Partial<ContactSectionData> | null>(query);

  if (!data?.contactCards?.length) {
    return null;
  }

  const contactCards = data.contactCards.filter((card): card is ContactCard => {
    return Boolean(
      card?.type &&
        card?.title &&
        card?.details?.length &&
        card?.actionLabel &&
        card?.actionLink
    );
  });

  if (!contactCards.length) {
    return null;
  }

  return {
    contactCards,
  };
}
