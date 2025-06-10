import {getPageByHref, getPageDataByDocumentID} from "~/api/strapi-api";
import type {Route} from "./+types/$id";
import {Builder} from "~/components/ui/builder";
import {findByCriteria} from "~/lib/helper";

export async function loader({params}: Route.LoaderArgs) {
    try {
        console.log(params.id)
        const page = await getPageByHref(params.id);
        const res = await getPageDataByDocumentID(page.page.documentId);
        return res.data[0]
    } catch (error) {
        return {data: null};
    }
}

export function meta({data}: Route.MetaArgs & { data: any }) {
    if (!data?.settings) return [];
    return [
        {title: `CRAFTFIRE - ${data.settings.title}`},
        {description: data.settings.description},
    ];
}

export default function PageIndex({loaderData}: Route.ComponentProps) {
    console.log(loaderData)
    const arr = [
        {name: 'Alice', age: 25},
        {name: 'Bob', age: 30, children: ['Tom', 'Jerry']},
        {name: 'Charlie', age: 25},
    ];
    const result1 = findByCriteria(arr, {name: 'Bob'});
    // console.log(result1);

    const result2 = findByCriteria(arr, {name: 'Bob', 'has:children': true});
    // console.log(result2);

    const result3 = findByCriteria(arr, {'has:children': true});
    // console.log(result3);


    return (
        <div className="container mx-auto mt-5">
            <Builder data={loaderData}/>
        </div>
    );
}