import {Link} from "react-router";

export const Footer = () => {
    return (
        <div className="container mx-auto py-5">
            <div className="flex gap-2 justify-center">
                <Link to="/datenschutz"
                      className="hover:underline text-[#62748e] hover:text-[#00c16a]">Datenschutz</Link>
                <div className="text-[#62748e]">&</div>
                <Link to="/impressum"
                      className="text-[#00c16a] hover:underline text-[#62748e] hover:text-[#00c16a]">Impressum</Link>

            </div>
        </div>
    )
}