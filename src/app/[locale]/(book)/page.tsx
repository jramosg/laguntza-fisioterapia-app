import styles from "./page.module.css";
import Container from "@/components/Container";
import { Calendar } from "lucide-react";
import BookForm from "./_components/BookForm";
import { useTranslations } from "next-intl";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Booking");
  console.log("params", params.locale);
  return (
    <>
      <Container>
        <h1 className={styles.head}>
          {t("Book Your Physiotheraphy Appointment")}
        </h1>
        <section className={`card card--elevated ${styles.formContainer}`}>
          <header className={styles.cardHeader}>
            <h2>
              <Calendar />
              Schedule Your Session
            </h2>
            <p className={styles.description}>
              Fill out the form below to book your appointment
            </p>
          </header>
          <BookForm locale={params.locale} />
        </section>
      </Container>
    </>
  );
}
