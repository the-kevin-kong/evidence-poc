export async function onRequestGet(ctx) {
    const path = new URL(ctx.request.url).pathname.replace("/_app/", "");
    const file = await ctx.env.APP.get(path);
    if (!file) return new Response(`${path}`, { status: 404 });
    return new Response(file.body, {
        headers: { "Content-Type": file.httpMetadata.contentType },
    });
}
