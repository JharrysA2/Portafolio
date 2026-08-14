export default function GlassButton({
  as: Component = "a",
  children,
  icon,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "glass-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide text-white/90";
  const variantClass = variant === "primary" ? "glass-btn-primary" : "";

  return (
    <Component className={`${base} ${variantClass} ${className}`} {...props}>
      {icon}
      {children}
    </Component>
  );
}
