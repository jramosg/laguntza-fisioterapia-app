import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/Container";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  Loader2,
} from "lucide-react";
import BookForm from "./_components/BookForm";

export default function Home() {
  return (
    <>
      <Container>
        <h1 className={styles.head}>Book Your Physiotheraphy Appointment</h1>
        <section className={`card card--elevated ${styles.formContainer}`}>
          <header className={styles.cardHeader}>
            <h2><Calendar/>Schedule Your Session</h2>
            <p className={styles.description} >Fill out the form below to book your appointment</p>
          </header>
          <BookForm />
        </section>
      </Container>
    </>
  );
}
