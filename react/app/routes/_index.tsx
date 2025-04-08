import {getPageData} from "~/api/strapi-api";
import type {Route} from "./+types/_index";
import {Builder} from "~/components/ui/builder";

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await getPageData("index");
    } catch (error) {
        return {data: null};
    }
}

export function meta({params, data}: Route.MetaArgs & { data: any }) {
    return [
        {title: `CRAFTFIRE - ${data[0].settings.title}`},
        {description: data[0].settings.description},
    ];
}

export default function PageIndex({loaderData}: Route.ComponentProps) {
    return (
        <div className="container mx-auto mt-5">
            <Builder data={loaderData}/>
        </div>
    );
}