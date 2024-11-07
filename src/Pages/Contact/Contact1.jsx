import Contact from "../Home/Contact";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import Map from "./Map";

const Contact1 = () => {
    return (
        <div className="bg-base-100">
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <Contact></Contact>
            <Map></Map>
        </div>
    );
};

export default Contact1;