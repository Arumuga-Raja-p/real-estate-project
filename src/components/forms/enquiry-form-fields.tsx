"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ENQUIRY_TYPE_OPTIONS,
  type EnquiryFormData,
} from "@/lib/enquiry-form";

interface EnquiryFormFieldsProps {
  formData: EnquiryFormData;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  labelClassName?: string;
  inputClassName?: string;
  selectClassName?: string;
  textareaClassName?: string;
  messageRows?: number;
}

export function EnquiryFormFields({
  formData,
  onChange,
  labelClassName = "block text-sm font-medium text-gray-700 mb-2",
  inputClassName = "border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300",
  selectClassName = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300",
  textareaClassName = "resize-none border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors duration-300",
  messageRows = 4,
}: EnquiryFormFieldsProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={onChange}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={onChange}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91-9543326699"
            value={formData.phone}
            onChange={onChange}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className={labelClassName}>
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={onChange}
            className={selectClassName}
          >
            <option value="">Select inquiry type</option>
            {ENQUIRY_TYPE_OPTIONS.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClassName}>
          Subject *
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Brief subject of your inquiry"
          value={formData.subject}
          onChange={onChange}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={messageRows}
          placeholder="Please provide details about your inquiry..."
          value={formData.message}
          onChange={onChange}
          className={textareaClassName}
        />
      </div>
    </>
  );
}
