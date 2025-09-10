import {IoIosDocument, IoLogoLinkedin, IoMdMail} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import CV from "../assets/CV.pdf"

interface LinksProps {
    className?: string
}

export function Links({className}: LinksProps) {

    const openLink = (link : string) => {
        window.open(link, "_blank");
    };

    return (
        <div className={className} id={"links"}>
            <div className={"button"} onClick={() => openLink(CV)}><IoIosDocument/> CV</div>
            <div className={"button"} onClick={() => openLink("mailto:noureldinesamehelfangary@gmail.com")}><IoMdMail/> Email</div>
            <div className={"button"} onClick={() => openLink("https://github.com/nour2063")}><TbBrandGithubFilled/> GitHub</div>
            <div className={"button"} onClick={() => openLink("https://www.linkedin.com/in/nour-elfangary/")}><IoLogoLinkedin/> LinkedIn</div>
        </div>
    );
}