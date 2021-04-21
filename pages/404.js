import {useEffect} from 'react'
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
       setTimeout(() => {
           router.push('/')
       }, 3000);
    }, []);
    return ( 
        <div className='not-found'>
            <h1 className="not-found-h1">404</h1>
            <h2>That page cannot be found.</h2>

        </div>
     );
}
 
export default NotFound;