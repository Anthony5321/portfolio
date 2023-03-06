import {SlSocialGithub} from "react-icons/sl";
import github from "../../assets/github.gif";
import linkedIn from "../../assets/linkedIn.gif";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a className="gif-linkedIn" href="https://www.linkedin.com/in/anthonyharpestad/" target='_blank' ><img src={linkedIn} alt="linkedIn" /></a>
        <a className="gif-git" href="https://github.com/Anthony5321" target='_blank' ><img src={github} alt="github" /></a>
    </div>
  )
}
export default HeaderSocials