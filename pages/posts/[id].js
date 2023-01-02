import Image from "next/image";
import Layout from "../../components/Layout";
import Author from "../../components/_child/Author";
import Error from "../../components/_child/Error";
import Related from "../../components/_child/Related";
import Spinner from "../../components/_child/Spinner";
import Fetcher from "../../lib/fetcher";
import getPost from "../../lib/helper";
import {useRouter} from "next/router";
import { SWRConfig } from "swr";

const Page = ({fallback}) => {

    const router = useRouter();

    const {id} = router.query;
    const {data, isLoading, isError} = Fetcher(`/articles/${id}`);

    if (isLoading) return <Spinner />;
    if (isError) return <Error text={"Something Went Wrong..."}/>;
    if (!data || data.length == 0) return <Error text={"Article not found"}/>;
    return (
        <SWRConfig
            value={
                {fallback}
            }
        >
            <Article {...data}/>
        </SWRConfig>
    )
}

const Article = ({ title, subtitle, img, category, author, published}) => {

    return (
        <Layout>
            <section className="container mx-auto py-12 md:px-2 w-1/2">
                <div className="flex justify-center">
                    {author ? <Author {...author} /> : <></>}
                </div>

                <div className="py-10">
                    <h1 className="title pb-5">{title}</h1>
                    <p className="text-gray-500 text-xl text-center">
                        {subtitle}
                    </p>

                    <div className="py-10">
                        <Image 
                            src={img}
                            width={900}
                            height={600}
                            className="rounded-3xl"
                        />
                    </div>

                    <div className="text-gray-600 text-lg flex flex-col gap-4">

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus itaque nisi laboriosam, reprehenderit ipsa aut voluptates hic perferendis ullam possimus sit. Voluptatibus quis rem optio inventore animi error quaerat, autem facilis ullam distinctio nostrum, illum repudiandae sunt totam. Accusamus.
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum delectus architecto? Earum facere explicabo sapiente debitis! Fugiat, quos voluptas corrupti voluptate reprehenderit dolores ipsum laudantium. Veritatis voluptatem corporis dolorum temporibus ut id nam blanditiis eius amet, sunt dolores quasi illum beatae, aliquam consectetur suscipit laudantium nihil inventore ullam minus delectus. Harum, nostrum consequuntur! At, eaque dolorem facere incidunt nulla magnam sed id! Dolorem, laborum deserunt molestiae illum odio tenetur nostrum est maiores temporibus maxime perferendis quasi aut quidem voluptatum rem ratione corporis odit iure vitae eveniet vero praesentium dolorum iste! Voluptates totam quaerat accusantium explicabo atque magni quae error!</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum labore, nostrum laborum facere minima magni soluta, voluptate illum assumenda unde quas cupiditate voluptatibus sapiente. In unde quasi blanditiis voluptates labore.</p>
                    </div>
                </div>

                <Related />

            </section>

        </Layout>
    );
}

export default Page;

export async function getStaticProps({params}) {

    const post = await getPost('/articles', params.id);

    return {
        props: {
            fallback: {
                '/api/articles': post
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPost('/articles');

    return {
        paths: posts.map(post => {
            return {
                params: {
                    id: post.id.toString()
                }
            }
        }),
        fallback: false
    }
}