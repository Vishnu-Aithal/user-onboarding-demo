import React, { useEffect } from "react";

export const useFocusOnMount = (ref: React.RefObject<HTMLInputElement>) => {
    useEffect(() => {
        ref.current?.focus();
    }, [ref]);
};
