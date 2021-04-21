import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/blogs.module.css'
const Blogs = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>All Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>All Blogs</h1>

            {
                posts.map((posts) => (
                    <>
                        {
                            <a className={style.single} key={posts.id}>
                                <Link href={"/blogs/" + posts.id} >
                                    <h3> <p >{posts.title}</p></h3>
                                </Link>
                            </a>
                        }
                    </>
                ))
            }
        </div>
    );
}

export default Blogs;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // if(!posts){
    //     return{
    //         data:null
    //     }
    // }
    return {
        props: { posts }
    }
}

