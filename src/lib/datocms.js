import tiny from 'tiny-json-http'

export async function request({ query, variables, preview }) {

    let endpoint = 'https://graphql.datocms.com'

    if (process.env.DATOCMS_ENVIRONMENT) {
        endpoint += `/environments/${process.env.DATOCMS_ENVIRONMENT}`
    }

    if (preview) {
        endpoint += `/preview`
    }

    const { body } = await tiny.post({
        url: endpoint,
        headers: {
            authorization: `Bearer ${process.env.NEXT_CMS_DATOCMS_API_TOKEN}`,
        },
        data: {
            query,
            variables
        }
    })

    if(body.errors) {
        console.error("Ohhh! There are some errors in the query!")
        throw body.errors
    }

    return body.data
}