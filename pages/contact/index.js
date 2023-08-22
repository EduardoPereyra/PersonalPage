import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

function ContactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
