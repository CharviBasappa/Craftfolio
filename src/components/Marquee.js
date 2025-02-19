import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <p style={{ marginRight: "40px" }}>React.js</p>
      <p style={{ marginRight: "40px" }}>TypeScript</p>
      <p style={{ marginRight: "40px" }}>Redux</p>
      <p style={{ marginRight: "40px" }}>Node.js</p>
      <p style={{ marginRight: "40px" }}>Python</p>
    </Marquee>
  );
};

export default MarqueeComponent;
