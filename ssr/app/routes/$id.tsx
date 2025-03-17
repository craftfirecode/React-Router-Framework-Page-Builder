import {getPageData} from "~/api/strapi-api";
import type {Route} from "./+types/$id";

export function meta({params}: Route.MetaArgs) {
    return [
        {title: `Blog ${params.id}`},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await getPageData(params.id);
    } catch (error) {
        return {data: null};
    }
}

export default function PageIndex({loaderData}: Route.ComponentProps) {
    return (
        <div className="container mx-auto mt-5">
            <h1>PAGE: {loaderData[0].title}</h1>
        </div>
    );
}