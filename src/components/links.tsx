import {IoIosDocument, IoLogoLinkedin, IoMdMail} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {BiLogoInstagramAlt} from "react-icons/bi";
import CV from "../CV.pdf"

interface LinksProps {
    className?: string
}

export function Links({className}: LinksProps) {

    const openLink = (link : string) => {
        window.open(link, "_blank");
    };

    return (
        <div className={className} id={"links"}>
            <div className={"button"} onClick={() => openLink(CV)}>CV <IoIosDocument/></div>
            <div className={"button"} onClick={() => openLink("mailto:noureldinesamehelfangary@gmail.com")}>Email <IoMdMail/></div>
            <div className={"button"} onClick={() => openLink("https://github.com/nour2063")}>GitHub <TbBrandGithubFilled/></div>
            <div className={"button"} onClick={() => openLink("https://www.linkedin.com/in/nour-elfangary/")}>LinkedIn <IoLogoLinkedin/></div>
            <div className={"button"} onClick={() => openLink("https://www.instagram.com/noureldineee_/")}>Instagram <BiLogoInstagramAlt/></div>
        </div>
    );
}