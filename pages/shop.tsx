import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { get } from "../service/redis";

export const getServerSideProps = ({ query: { orderId }, locale }: any) => {
    const order = get(orderId) || {};

    return {
        props: { locale: locale, order }
    };
};

export default function Shop({ locale, order }: any) {
    return (
        <div>
            <Navbar currentLang={locale} />
            <div className="p-10">{JSON.stringify(order, null, 2)}</div>
            <Footer />
        </div>
    );
}