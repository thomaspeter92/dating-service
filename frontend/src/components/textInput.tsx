import { cva } from "class-variance-authority";
import { Icons } from "./icons";
import { cn } from "../lib/utils";

const InputStyles = cva(
  "py-4 px-4 bg-rose-100 w-full rounded placeholder:text-rose-400 focus:outline-rose-500",
  {
    variants: {
      size: {
        md: "w-full",
      },
    },
  }
);

type Props = {
  type: string;
  onChange: (event: React.ChangeEvent) => void;
  placeholder: string;
  size?: "md";
  icon?: keyof typeof Icons;
  error: string | undefined;
  value: string;
  name: string;
};

const TextInput = ({
  type,
  onChange,
  placeholder,
  size = "md",
  icon,
  error,
  value,
  name,
}: Props) => {
  const Icon = Icons[icon as keyof typeof Icons];
  const ErrorIcon = Icons["alertCircle"];
  return (
    <div>
      <div className="relative">
        {icon ? (
          <Icon
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-rose-400"
          />
        ) : null}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={cn(
            InputStyles({ size }),
            icon ? "pl-9" : "",
            error ? "border-red-500 bg-red-100" : ""
          )}
          placeholder={placeholder}
        />
      </div>
      {error ? (
        <p className="text-sm font-semibold text-red-500 flex items-center  gap-1 mt-1">
          <ErrorIcon size={15} />
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default TextInput;