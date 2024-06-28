import client, { urlFor } from '../../../sanityClient/sanityClient';
import BlockContent from '@sanity/block-content-to-react';

export async function generateStaticParams() {
  const query = `*[_type == "post"]{slug}`;
  const posts = await client.fetch(query);

  return posts.map(post => ({
    slug: post.slug.current
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug]{title}`;
  const post = await client.fetch(query, { slug });

  if (!post.length) {
    return {
      title: 'Post not found'
    };
  }

  return {
    title: post[0].title
  };
}

const customSerializers = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case "h1":
          return <h1 className="text-4xl my-4 font-semibold">{props.children}</h1>;
        case "h2":
          return <h2 className="text-3xl my-4 font-semibold">{props.children}</h2>;
        case "h3":
          return <h3 className="text-2xl my-4 font-semibold">{props.children}</h3>;
        case "h4":
          return <h4 className="text-xl my-4 font-semibold">{props.children}</h4>;
        case "h5":
          return <h5 className="text-lg my-4 font-semibold">{props.children}</h5>;
        case "h6":
          return <h6 className="text-base my-4 font-semibold">{props.children}</h6>;
        case "blockquote":
          return <blockquote className="border-l-4 border-gray-400 pl-4 my-4 italic">{props.children}</blockquote>;
        default:
          return <p className="my-2">{props.children}</p>;
      }
    }
  }
};

export default async function BlogPost({ params }) {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug]{
    ...,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    body
  }`;
  const post = await client.fetch(query, { slug });

  if (!post.length) {
    return <div>Post not found</div>;
  }

  return (
    <div className="w-[80vw] mx-auto my-8 p-4 bg-[#FFEFE24D] shadow-md">
      <div className="w-full h-auto overflow-hidden mb-[40px] rounded-lg">
        <img src={urlFor(post[0].mainImage).url()} alt={post[0].title} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-[30px] font-[550] text-center mb-6">{post[0].title}</h1>
      <div className="prose prose-md mt-[50px] mx-auto">
        <BlockContent blocks={post[0].body} serializers={customSerializers} />
      </div>
      <div className="flex items-center mt-8">
        <img src={urlFor(post[0].authorImage).width(50).url()} alt={post[0].authorName} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-lg font-semibold">{post[0].authorName}</p>
        </div>
      </div>
    </div>
  );
}
