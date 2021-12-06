import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
const location = useLocation();

useEffect(() => {
    window.scrollTo({ top: 0 });
}, [location]);

};
 
export default useScrollToTop;