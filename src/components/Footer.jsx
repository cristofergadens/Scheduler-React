import FooterLogo from "../assets/footerLogo.png";
import * as Styled from "../components/styles";

export default function Footer() {
  return (
    <Styled.Footer>
      <div className="logo">
        <img src={FooterLogo} alt="logo-Gadens" />
      </div>
    </Styled.Footer>
  );
}
