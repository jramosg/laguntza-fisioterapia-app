"use client";
import {
  User,
  Calendar as CalendarIcon,
  FileText,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import styles from "./bookForm.module.css";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { eu, es } from "react-day-picker/locale";
import type { Lang } from "@/types/lang";

type Form = {
  name: string;
  lastName?: string;
  email?: string;
  phone?: string;
  day?: string;
  hour?: string;
  time?: string;
  notes?: string;
};

interface FormFieldWrapperProps {
  control: Control<FieldValues>;
  name: keyof Form;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
}

function FormFieldWrapper({
  control,
  name,
  label,
  icon,
  placeholder = "",
  required = false,
  children,
  className = "",
}: FormFieldWrapperProps) {
  return (
    <FormField
      rules={required ? { required: true } : undefined}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel aria-required={required} className={styles.label}>
            {icon}
            {`${label} ${required ? "*" : ""}`}
          </FormLabel>
          <FormControl aria-required={required}>
            {children || <Input placeholder={placeholder} {...field} />}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default function BookForm({ locale }: { locale: Lang }) {
  const form = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.bookForm}>
        <FormFieldWrapper
          control={form.control}
          name="name"
          label="Nombre"
          icon={<User />}
          placeholder="Ingrese su nombre"
          required
        />

        <FormFieldWrapper
          control={form.control}
          name="lastName"
          label="Apellido"
          icon={<User />}
          placeholder="Ingrese su apellido"
        />

        <FormFieldWrapper
          control={form.control}
          name="email"
          label="Email"
          icon={<Mail />}
          placeholder="ejemplo@email.com"
        />

        <FormFieldWrapper
          control={form.control}
          name="phone"
          label="Teléfono"
          icon={<Phone />}
          placeholder="Ingrese su teléfono"
          required
        />
        <FormFieldWrapper
          control={form.control}
          name="day"
          label="Fecha"
          icon={<CalendarIcon />}
          required
        >
          <Calendar
            mode="single"
            className={styles.calendar}
            selected={new Date()}
            locale={locale === "es" ? es : eu}
            disabled={{
              before: new Date(),
            }}
            onSelect={(e) => console.log(e)}
          />
        </FormFieldWrapper>
        <FormFieldWrapper
          control={form.control}
          name="hour"
          label="Hora"
          icon={<Clock />}
          required
        >
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </FormFieldWrapper>
        <FormFieldWrapper
          control={form.control}
          name="day"
          label="Notas"
          icon={<FileText />}
          required
          className={styles.descriptionField}
        >
          <Textarea />
        </FormFieldWrapper>
        <Button className={styles.submitButton}>Book appointment</Button>
      </form>
    </Form>
  );
}
