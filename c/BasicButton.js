export default function BasicButton({
  label,
  onClick = () => {},
  fontSize = 20,
  bgColor = "#2b2112",
  fontColor = "#fbfbf8",
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: bgColor,
        padding: "12px 36px 14px 36px",
        borderRadius: 18,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div style={{ color: fontColor, fontSize: fontSize }}>{label}</div>
    </div>
  );
}
