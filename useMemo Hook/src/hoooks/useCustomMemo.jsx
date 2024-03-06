import { useEffect } from "react";
import { useRef } from "react"


const areEqual = (prevDeps, nextDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length !== nextDeps.length) return false;

    for( let i=0; i < prevDeps.length; i++) {
        if(prevDeps[i] !== nextDeps[i]) {
            return false
        }
    }
    return true
}

const useCustomMemo = (cb, deps) => {
    // variable os state to store the cached value 
     const memorizedRef = useRef(null);


    // changes in deps 
    if(!memorizedRef.current || !areEqual(memorizedRef.current.deps, deps)) {
        memorizedRef.current = {
            value: cb(),
            deps
        }
    }

    // cleanup logic
    useEffect(() => {
        return () => {
            memorizedRef.current = null;
        }
    }, [])

    // return the memoised value (if any)
    return memorizedRef.current.value;
}

export default useCustomMemo




// cb -> callback 
// deps -> dependency 