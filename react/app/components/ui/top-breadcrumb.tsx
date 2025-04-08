import {Link, useLocation} from "react-router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "./breadcrumb";
import React from "react";

export function TopBreadcrumb() {
    const location = useLocation();
    const pathname = location.pathname.split("/").filter((x) => x);

    return (
        <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                {pathname.map((value, index) => {
                    const to = `/${pathname.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathname.length - 1;
                    return isLast ? (
                        <BreadcrumbItem key={to}>
                            <BreadcrumbPage>{value}</BreadcrumbPage>
                        </BreadcrumbItem>
                    ) : (
                        <React.Fragment key={to}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={to}>{value}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}