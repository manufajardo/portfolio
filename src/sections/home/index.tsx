import { ReactElement } from "react";
import { fastEdit } from "../../fast-edit";
import { LinkedIn as LinkedInIcon, MailOutline as MailOutlineIcon  } from '@mui/icons-material';


export const Home = (): ReactElement => {
    return (
        <section id="home">
            <div>
                <p className="name-title">Emanuelly Fajardo</p>
                <p className="name-description">UX designer e graduanda em psicologia</p>
                <div className="svg-redirect-container">
                    <a href={fastEdit.email} className="svg-redirect-box">
                        <MailOutlineIcon />
                    </a>
                    <a href={fastEdit.linkedin} className="svg-redirect-box">
                        <LinkedInIcon/>
                    </a>
                </div>
            </div>
        </section>
    )
}
