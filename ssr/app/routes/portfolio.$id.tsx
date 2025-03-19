import {getPostData} from "~/api/strapi-api";
import type {Route} from "./+types/portfolio.$id";
import {Builder} from "~/components/ui/builder";

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await getPostData(params.id);
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

export default function PostIndex({loaderData}: Route.ComponentProps) {
    return (
        <div className="container mx-auto mt-5">
            <Builder data={loaderData}/>
        </div>
    );
}