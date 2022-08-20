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
    console.log({Updated: formattedPageItems.Updated});
    console.log(formattedPageItems.Slug.formula);
    return {
        id: page.id,
        cover: cover.url ?? cover,
        title: formattedPageItems.Name.results[0].title.plain_text,
        tags: formattedPageItems.Tags.multi_select,
        description: formattedPageItems.Description.results[0].rich_text.plain_text,
        date: formattedPageItems.Updated.last_edited_time ?? formattedPageItems.Updated.date.start,
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

export const getPost = async (id: string) => {
    const page = await client.pages.retrieve({ page_id: id });

    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const markdown = n2m.toMarkdownString(mdBlocks);
    const post = await pageToPostTransformer(page);

    console.log("POSTTTT", {post})

    return {
        post,
        markdown
    }
}