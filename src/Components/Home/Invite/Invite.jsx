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
                    {iFrame("https://www.youtube.com/embed/AK5ewq4IRRw")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/YKwbg-kyTy4")}
                </div>
                <div className="content-center">
                    <img src="images/semanahd.png" alt="Semana de Humanidades Digitales" />
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/aA1Sqr85PTE")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/bpcwrhJerhI")}
                </div>
                <div>
                    {iFrame("https://www.youtube.com/embed/WojFmR0eKIo")}
                </div>
            </div>
        </section>
    );
}

export default Invite;
