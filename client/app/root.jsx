import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, Meta, Outlet, ScrollRestoration, Scripts, LiveReload, useRouteError } from "@remix-run/react"
import { NextUIProvider } from "@nextui-org/react";
import stylesheet from "./tailwind.css";
import "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: stylesheet },
    { rel: "stylesheet", href: cssBundleHref },
];

export default function Root() {
    const error = useRouteError();
    if (error) console.log(error);

    return (<html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Links />
            <Meta />
        </head>
        <body>
            <NextUIProvider>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </NextUIProvider>
        </body>
    </html>)
}