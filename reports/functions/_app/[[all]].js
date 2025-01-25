// export async function onRequestGet(ctx) {
//     const path = new URL(ctx.request.url).pathname.replace("/_app/", "");
//     const file = await ctx.env.APP.get(path);
//     if (!file) return new Response(null, { status: 404 });
//     return new Response(file.body, {
//         headers: { "Content-Type": file.httpMetadata.contentType },
//     });
// }

export async function onRequest(context) {
    const url = new URL(context.request.url);
    const filePath = url.pathname;
    const file = await context.env.APP.get(filePath);
    if (file === null) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(file.body, {
      headers: {
        'Content-Type': file.headers.get('Content-Type'),
      },
    });
}
