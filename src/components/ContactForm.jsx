import React from "react";
import FadeIn from "./FadeIn";
import Button from "./Button";
import { Socials } from "../components/SocialMedia";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-100 0 text-gray-900 text-sm md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            required
            placeholder="Enter a mail"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm md:text-base text-gray-900 bg-gray-100 rounded-lg 0 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            required
            placeholder="Enter a subject"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm md:text-base text-gray-900 bg-gray-100 rounded-lg shadow-sm 0 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter a message"
          ></textarea>
        </div>
        <Button type="submit">Send message</Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
