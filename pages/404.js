import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const notFoundPage = () => {
    
    let router = useRouter()
    
    const handleBack = ()=>{
          return router.push("/")
    }

    // automatic redicter to homepage

    useEffect(()=>{
        setTimeout(()=>{
            return router.push("/")
        },3000)
    },[])
      

    return (
        <div>
            <h2>notFoundPage</h2>
            <button onClick={handleBack} className='bg-red-200'>Back to home page</button>
        </div>
    );
};

export default notFoundPage;