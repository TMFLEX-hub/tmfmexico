import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/Icon";

const buttonClasses =
  "group relative inline-flex items-stretch overflow-hidden border-2 border-primary bg-white";

type Variant = "primary" | "inverse";

function ButtonContent({
  children,
  icon = "mdi:arrow-right",
  variant = "primary",
}: {
  children: ReactNode;
  icon?: string;
  variant?: Variant;
}) {
  const inverse = variant === "inverse";

  return (
    <>
      <span className="relative flex min-h-14 items-center px-6 text-[15px]">
        <span
          className={`absolute inset-0 origin-left bg-primary transition-transform duration-300 ease-out ${
            inverse ? "scale-x-0 group-hover:scale-x-100" : "group-hover:scale-x-0"
          }`}
        />
        <span
          className={`relative z-10 transition-colors duration-300 ${
            inverse
              ? "text-primary group-hover:text-white"
              : "text-white group-hover:text-primary"
          }`}
        >
          {children}
        </span>
      </span>
      <span
        className={`relative z-10 flex size-14 shrink-0 items-center justify-center transition-colors duration-300 ${
          inverse ? "bg-white group-hover:bg-accent" : "bg-accent"
        }`}
      >
        <Icon
          icon={icon}
          className={`size-5 transition-colors duration-300 ${
            inverse ? "text-primary group-hover:text-white" : "text-white"
          }`}
        />
      </span>
    </>
  );
}

type SharedProps = {
  children: ReactNode;
  icon?: string;
  className?: string;
  variant?: Variant;
};

type ButtonAsLink = SharedProps & {
  href: string;
  as?: never;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

type ButtonAsButton = SharedProps & {
  href?: undefined;
  as?: never;
} & Omit<ComponentProps<"button">, "children" | "className">;

type ButtonAsSpan = SharedProps & {
  href?: undefined;
  as: "span";
};

export function Button(props: ButtonAsLink | ButtonAsButton | ButtonAsSpan) {
  const classes = `${buttonClasses} ${props.className ?? ""}`.trim();
  const { children, icon, variant } = props;

  if (props.as === "span") {
    return (
      <span className={classes}>
        <ButtonContent icon={icon} variant={variant}>
          {children}
        </ButtonContent>
      </span>
    );
  }

  if ("href" in props && props.href) {
    const {
      href,
      children: _children,
      icon: _icon,
      className: _className,
      variant: _variant,
      ...linkProps
    } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        <ButtonContent icon={icon} variant={variant}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  const {
    children: _children,
    icon: _icon,
    className: _className,
    variant: _variant,
    type = "button",
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      <ButtonContent icon={icon} variant={variant}>
        {children}
      </ButtonContent>
    </button>
  );
}
