require('dotenv').config()
import {Client} from "@notionhq/client";
import {NotionToMarkdown} from "notion-to-md";

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: client });

const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

export const getPostsFromNotion = async () => {

    console.log(database);
    console.log(client);
    // list blog posts
    const response = await client.databases.query({
        database_id: database,
        filter: {
            property: 'Published',
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: 'Updated',
                direction: 'descending'
            }
        ]
    });

    // return response.results.map(res => {
    //     return pageToPostTransformer(res);
    // })

    return await getFormattedPage(response);

}

const getFormattedPage = async (response: any) => {
    return await Promise.all(response.results.map(async (res: any) => {
        return await pageToPostTransformer(res);
    }));
}

const pageToPostTransformer = async (page: any) => {
    let cover = page.cover;
    switch (cover.type) {
        case 'file':
            cover = page.cover.file
            break;
        case 'external':
            cover = page.cover.external.url;
            break;
        default:
            // Add default cover image if you want...
            cover = ''
    }

    console.log(page);

    const formattedPageItems = await getPropertiesOfPage(page.id, page.properties);

    // console.log(formattedPageItems.Description.results);
    console.log(formattedPageItems.Slug.formula);
    return {
        id: page.id,
        cover: cover,
        title: formattedPageItems.Name.results[0].title.plain_text,
        tags: formattedPageItems.Tags.multi_select,
        description: formattedPageItems.Description.results[0].rich_text.plain_text,
        date: formattedPageItems.Updated.last_edited_time,
        slug: formattedPageItems.Slug.formula.string,
    }
}

const getPropertiesOfPage = async (pageId: string, properties: any) => {

    let formattedProperties: any = {};

    for(const property in properties) {
        const response = await client.pages.properties.retrieve({
            page_id: pageId,
            property_id: properties[property].id
        });
        
        formattedProperties[property] = response;
    }

    console.log({formattedProperties});
    return formattedProperties;
}

// export const getPost = async (slug: string) => {
//     const response = await client.databases.query({
//         database_id: database,
//         filter: {
//             property: 'Slug',
//             formula: {
//                 string: {
//                     equals: slug // slug
//                 }
//             },
//             // add option for tags in the future
//         },
//         sorts: [
//             {
//                 property: 'Updated',
//                 direction: 'descending'
//             }
//         ]
//     });

//     if (!response.results[0]) {
//         throw 'No results available'
//     }

//     // grab page from notion
//     const page = response.results[0];

//     console.log({page});

//     // const mdBlocks = await n2m.pageToMarkdown(page.id)
//     // const markdown = n2m.toMarkdownString(mdBlocks);
//     // const post = pageToPostTransformer(page);

//     // return {
//     //     post,
//     //     markdown
//     // }

//     return page
// }

// export const getPost = async (id: string) => {

//     // const response = await client.pages.retrieve({ page_id: id });
//     const response = await client.blocks.children.list({block_id: id});
//     console.log(response);

//     return response.results;
// }

export const getPost = async (id: string) => {
    const page = await client.pages.retrieve({ page_id: id });

    // console.log({page});

    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const markdown = n2m.toMarkdownString(mdBlocks);
    const post = await pageToPostTransformer(page);

    console.log("POSTTTT", {post})

    return {
        post,
        markdown
    }

    // return page
}