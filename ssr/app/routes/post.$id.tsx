import {getPostData} from "~/api/strapi-api";
import type {Route} from "./+types/post.$id";
import {Content} from "~/components/ui/content";
import {Builder} from "~/components/ui/builder";

export function meta({params}: Route.MetaArgs) {
    return [
        {title: `Blog ${params.id}`},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await getPostData(params.id);
    } catch (error) {
        return {data: null};
    }
}

export default function PostIndex({loaderData}: Route.ComponentProps) {
    return (
        <div className="container mx-auto mt-5">
            <Builder data={loaderData} />
        </div>
    );
}