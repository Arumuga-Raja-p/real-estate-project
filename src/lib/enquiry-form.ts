export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export const INITIAL_ENQUIRY_FORM_DATA: EnquiryFormData = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  subject: "",
  message: "",
};

export const ENQUIRY_TYPE_OPTIONS = [
  { value: "buying", label: "Buying Property" },
  { value: "selling", label: "Selling Property" },
  { value: "construction", label: "Building Construction" },
  { value: "consultation", label: "Free Consultation" },
  { value: "other", label: "Other" },
];
