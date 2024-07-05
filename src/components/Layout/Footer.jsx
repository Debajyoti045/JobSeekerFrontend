import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin,FaTwitter } from "react-icons/fa";
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Debajyoti 2024.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100084070718214"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCejRr4ClyclE3TRr1_s3G0w"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/debajyoti-das-903121249/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://x.com/21ucs134"} target="_blank">
          <FaTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
