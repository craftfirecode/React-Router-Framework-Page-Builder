import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useLocation,
} from "react-router";
import type {Route} from "./+types/root";
import "./app.css";
import React from "react";
import {getSettingsData} from "~/api/strapi-api";
import {Navigation} from "~/components/ui/navigation";
import {TopBreadcrumb} from "~/components/ui/top-breadcrumb";
import {Footer} from "~/components/ui/footer";

export async function loader() {
    try {
        return await getSettingsData();
    } catch (error) {
        console.error(error);
        return {data: null};
    }
}

export function Layout({children}: { children: React.ReactNode }) {
    const location = useLocation();
    const loaderData: any = useLoaderData<Route.ComponentProps>();
    const isPortfolioPage = /^\/portfolio(\/|$)/.test(location.pathname);

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className="dark h-[100vh]">
        <div className="flex flex-col h-[100vh]">
            <Navigation data={loaderData.top}/>
            {isPortfolioPage && (
                <div className="container mx-auto my-5">
                    <TopBreadcrumb/>
                </div>
            )}
            <div className="flex-1 flex flex-col">
                {children}
            </div>
            <Footer/>
        </div>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}
