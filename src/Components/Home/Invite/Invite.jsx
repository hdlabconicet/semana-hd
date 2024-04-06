import "./Invite.css";

const iFrame = (srcVideo) => {
    return(
        <iframe className="w-full mx-auto aspect-video rounded shadow-md" src={srcVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    );
}

const Invite = () => {
    return(
        <section className="invite-section">
            <div className="grid gap-8 lg:gap-16 xl:gap-20 lg:grid-cols-3 w-11/12 xl:w-2/3 2xl:w-2/3">
                <div>
                    {iFrame("https://www.youtube.com/embed/HBueiDXwvMI?si=FMHydDxfnnd_uMdv")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/loySwV_NAiI?si=w5Cp8z_VsG5WytuW")}
                </div>
                <div className="content-center">
                    <img src="images/semanahd.png" alt="Semana de Humanidades Digitales" />
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/9I_Yf9y96E8?si=s-rPqdW4FKnBhhLI")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/9I_Yf9y96E8?si=s-rPqdW4FKnBhhLI")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/9I_Yf9y96E8?si=s-rPqdW4FKnBhhLI")}
                </div>
            </div>
        </section>
    );
}

export default Invite;
