import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>About us</div>
      <Link to={"/home"}>Home</Link>
    </>
  );
}
