import { cn } from "@/lib/utils";
import styles from "./InputGroup.module.css";
import { InputGroupLabel } from "./InputGroupLabel";

export default function InputGroup({
  id,
  label,
  required = false,
  icon,
  children,
  className,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn(styles.inputGroup, className)}>
      <InputGroupLabel
        htmlFor={id}
        icon={icon}
        label={label}
        required={required}
      />
      {children}
    </div>
  );
}
