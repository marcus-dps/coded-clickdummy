export default function Screen({ image, children }) {
  return (
    <div className="Screen">
      <img className="background" src={image} alt="Screen" />
      {children}
    </div>
  );
}
