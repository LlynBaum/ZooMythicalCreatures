const About = () => {
    return(
        <main>
            <div className="flex flex-col">
                <h1 className="text-center font-bold text-4xl text-zinc-100 mt-10 mb-8">Über uns</h1>
                <div className="ml-12 text-zinc-100">
                    <div className="flex justify-around items-center">
                        <div className="mt-8 mb-3">
                            <h2 className="font-bold text-2xl text-zinc-100">Address:</h2>
                            <address>
                                Phantastische Tierwelt Zoo<br />
                                123 Fantasie Boulevard<br />
                                Zauberland, 54321<br />         
                            </address>
                        </div>
                        <iframe className="mr-16"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.3032238745614!2d8.57247311924617!3d47.384290218218865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0ea12b7a697%3A0x31929c3728d4b721!2sZoo%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1685691303697!5m2!1sen!2sch" 
                            width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                    <div className="max-w-3/4 ml-12 text-zinc-100 mt-8">
                    <h2 className="font-bold text-2xl text-zinc-100 mt-7 mb-3">Über uns:</h2>
                        <p>
                        Willkommen im Phantastische Tierwelt Zoo - einem Ort, an dem das Fantastische zur Realität wird! Unser Zoo beheimatet eine Vielzahl von mythischen Kreaturen aus allen Teilen der Welt. Von majestätischen Einhörnern bis hin zu furchterregenden Drachen wird unsere Sammlung Besucher jeden Alters faszinieren und inspirieren.

                        Bei Phantastische Tierwelt glauben wir daran, ein magisches und immersives Erlebnis für unsere Gäste zu schaffen. Unsere Gehege sind so gestaltet, dass sie die natürlichen Lebensräume der Kreaturen nachahmen, und unser sachkundiges Personal steht zur Verfügung, um Informationen zu liefern und Fragen zu beantworten, die Sie möglicherweise über diese bemerkenswerten Wesen haben.

                        Neben unseren Ausstellungen bieten wir eine Reihe von interaktiven Erlebnissen für Besucher an. Sie können auf einem Einhorn reiten, an einer Drachentrainingssitzung teilnehmen oder sogar eine geführte Tour durch den Zoo mit einem unserer Expertenführer machen.

                        Phantastische Tierwelt ist mehr als nur ein Zoo - es ist ein Ort, an dem Träume wahr werden. Ob Sie Fantasy-Enthusiast, Tierliebhaber oder einfach nur auf der Suche nach einem einzigartigen und unvergesslichen Tag sind, laden wir Sie ein, die Wunder unserer mythischen Menagerie zu erkunden.
                        </p>
                    </div> 
                <div className="max-w-3/4 ml-12 text-zinc-100 mt-8 mb-5">
                        <h2 className="font-bold text-2xl text-zinc-100 mt-7 mb-3">Vision:</h2>
                    <p className="mb-1">Die Vision des Phantastische Tierwelt Zoos besteht darin, durch die Magie mythischer Kreaturen ein Gefühl von Staunen und Phantasie in unseren Besuchern zu wecken. Unser Ziel ist es, eine Welt zu schaffen, in der die Grenze zwischen Fantasie und Realität verschwimmt und in der Besucher die ehrfurchterregende Majestät von Kreaturen erleben können, die nur in der Welt der Mythen und Legenden existieren.</p>
                    <p className="mb-1">Unser Ziel ist es, eine sichere und bereichernde Umgebung für unsere Tiere zu schaffen, in der sie gedeihen und für die einzigartigen und wundersamen Wesen geschätzt werden, die sie sind. Wir streben danach, führend in der Pflege und Erhaltung mythischer Kreaturen zu sein und arbeiten daran, ihr Überleben für kommende Generationen zu sichern.</p>
                    <p className="mb-1">Bei Phantastische Tierwelt glauben wir, dass wir durch die Förderung von Liebe und Respekt für diese unglaublichen Wesen eine größere Wertschätzung für die Natur als Ganzes fördern können. Unsere Vision besteht darin, ein Gefühl der Verbindung und Verantwortung für den Planeten und seine Bewohner, sowohl real als auch imaginär, zu inspirieren.</p>
                </div>
                
            </div>
        </main>
    )
}

export default About;