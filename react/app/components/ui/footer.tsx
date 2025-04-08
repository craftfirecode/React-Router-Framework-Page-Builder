import {NavLink} from "react-router";
import {cn} from "~/lib/utils";

export const Footer = () => {
    return (
        <div className="container mx-auto py-5">
            <div className="flex gap-2 justify-center">
                <NavLink to="/datenschutz"
                         className={({isActive}) =>
                             cn('app-nav-link', {
                                 'text-[#00c16a]': isActive,
                                 'text-white hover:text-[#00c16a]': !isActive,
                             })}

                >Datenschutz</NavLink>
                <div className="text-[#62748e]">&</div>
                <NavLink to="/impressum"
                         className={({isActive}) =>
                             cn('app-nav-link', {
                                 'text-[#00c16a]': isActive,
                                 'text-white hover:text-[#00c16a]': !isActive,
                             })}
                >Impressum</NavLink>
            </div>
        </div>
    )
}