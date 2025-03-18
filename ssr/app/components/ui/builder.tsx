import React from "react";
import {Image} from "~/components/ui/image";
import {Content} from "~/components/ui/content";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";
import {Space} from "~/components/ui/space";
import {PostList} from "~/components/ui/post-list";

export const Builder = ({data}: any) => {
    const renderComponent = (component: any) => {
        switch (component.__component) {
            case "cms.image":
                return (
                    <section className="">
                        <Image data={component}/>
                    </section>
                );
            case "cms.content":
                return (
                    <section className="">
                        <Content data={component}/>
                    </section>
                );
            case "cms.button":
                return (
                    <section className="">
                        <Link target={component.blank ? "_blank" : undefined} to={component.to}>
                            <Button>{component.value}</Button>
                        </Link>
                    </section>
                );
            case "cms.space":
                return (
                    <section className="">
                        <Space data={component}/>
                    </section>
                );
            case "cms.post-list":
                return (
                    <section className="">
                        <PostList data={component}/>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {data[0].zone.map((component: any, index: any) => (
                <React.Fragment key={index}>
                    {renderComponent(component)}
                </React.Fragment>
            ))}
        </>
    );
};
