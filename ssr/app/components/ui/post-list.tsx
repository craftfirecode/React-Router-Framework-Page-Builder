"use client"

import {getPostListData} from "~/api/strapi-api";
import {useEffect, useState} from "react";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";

export const PostList = ({data}: { data: any }) => {

    const [dataPosts, setDataPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPostListData();
            console.log('dataPosts', res)
            setDataPosts(res);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>{data.headline}</h1>
            <div className="grid grid-cols-3 gap-3">
                {dataPosts.map((item: any, index: string | number) => (
                    <div className="border-fx">
                        <div className="bg-[#030712]">
                            <img src={import.meta.env.VITE_PUBLIC_STRAPI_API_URL + item.thumbnail.url}
                                 className="w-full" alt=""/>
                            <div className="bg-black p-3">
                                <h1>{item.title}</h1>
                                <Link to={"/post/" + item.url}>
                                    <Button>Jetzt Lesen</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}