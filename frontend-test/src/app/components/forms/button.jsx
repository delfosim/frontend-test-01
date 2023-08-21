import { Button } from "@mui/material";
export default function ButtonComponent({
  variant,
  text,
  onClick,
  color,
  isDisabled,
  size,
}) {
  const stringColor = `bg-[${color}]`;

  const handleOnClick = () => {
    onClick();
  };
  return (
    <Button
      disabled={isDisabled}
      variant={variant}
      onClick={handleOnClick}
      className={stringColor}
      size={size}>
      {text}
    </Button>
  );
}
