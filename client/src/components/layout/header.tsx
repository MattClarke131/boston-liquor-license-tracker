import { Link } from "@tanstack/react-router";

const Spacer = () => {
  return <span> &bull; </span>
}
const Header = () => {
  return (
    <header>
      <Link to="/">License to Succeed</Link>
      <Spacer />
      <Link to="/maps">Maps</Link>
      <Spacer />
      <Link to="/database">Database</Link>
      <Spacer />
      <Link to="/resources">Resources</Link>
    </header>
  )
}

export default Header
