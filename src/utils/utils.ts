import { ReactEventHandler, RefObject, useEffect } from "react";

export function formatDate(date: string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler): void {
    let width = window.screen.width;
    useEffect(
        () => {
            if (width > 991) {
                const listener = (event: any) => {
                    // Do nothing if clicking ref's element or descendent elements
                    if (!ref.current || ref.current.contains(event.target as Node)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            };
        },
        [ref, handler]
    );
}