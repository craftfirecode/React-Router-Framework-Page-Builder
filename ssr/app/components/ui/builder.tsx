import React from "react";
import {Image} from "~/components/ui/image";
import {Content} from "~/components/ui/content";

export const Builder = ({data}: any) => {
    const renderComponent = (component: any) => {
        switch (component.__component) {
            case "cms.image":
                return (
                    <div className="">
                        <Image data={component} />
                    </div>
                );
            case "cms.content":
                return (
                    <div className="">
                        <Content data={component} />
                    </div>
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
