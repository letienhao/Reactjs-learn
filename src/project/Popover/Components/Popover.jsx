import ReactDOM from "react-dom";
function DropdownContentWrapper({
  positionPopover,
  position = "left",
  children,
  className = "z-10",
}) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className={`absolute ${className}`}
      style={{
        top: positionPopover.y + positionPopover.height * 1.2,
        [position]: positionPopover.x,
      }}
    >
      {children}
    </div>,
    document.getElementById("root")
  );
}
export default DropdownContentWrapper;
