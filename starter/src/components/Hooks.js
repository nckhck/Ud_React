// Script was developed with help of ChatGPT & UdacityGPT
import React, { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import { useDebounce } from "use-debounce";

const HookQuery = (searchQuery) => {
    const [searchBookQuery, setSearchBookQuery] = useState([]);
    const [valueSearch] = useDebounce(searchQuery, 500);

    useEffect(() => {
        let isActive = true;
        if (valueSearch) {
            search(valueSearch).then((data) => {
                if (data.error) {
                    setSearchBookQuery([]);
                } else {
                    if (isActive) {
                        setSearchBookQuery(data);
                    }
                }
            });
        }
        return () => {
            isActive = false;
            setSearchBookQuery([]);
        };
    }, [valueSearch]);
    return [searchBookQuery, setSearchBookQuery]
};

export default HookQuery;