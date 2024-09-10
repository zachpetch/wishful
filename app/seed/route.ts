import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// 
// const client = await db.connect();
// 
// async function setWishers() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS wishers (
//             id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email TEXT NOT NULL UNIQUE,
//             password TEXT NOT NULL,
//             confirmed DATE
//         );
//     `;
// }
// 
// async function setGroups() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS groups (
//             id UUID DEFAULT uuid_generate_v4() primary key,
//             name VARCHAR(255) NOT NULL,
//             code VARCHAR(255) NOT NULL,
//             organizer UUID NOT NULL,
//             CONSTRAINT group_organizer FOREIGN KEY(organizer) REFERENCES wishers(id)
//         );
//     `;
// }
// 
// async function setWishlists() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`DROP TABLE group_wisher;`
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS wishlists (
//             id UUID DEFAULT uuid_generate_v4() primary key,
//             wisher_id UUID NOT NULL,
//             group_id UUID NOT NULL,
//             CONSTRAINT fk_wishers FOREIGN KEY(wisher_id) REFERENCES wishers(id),
//             CONSTRAINT fk_groups FOREIGN KEY(group_id) REFERENCES groups(id)
//         );
//     `;
// }
// 
// async function setItems() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS items (
//             id UUID DEFAULT uuid_generate_v4() primary key,
//             name VARCHAR(255) NOT NULL,
//             group_id UUID NOT NULL,
//             wisher_id UUID NOT NULL,
//             link TEXT,
//             purchased DATE,
//             CONSTRAINT fk_wisher FOREIGN KEY(wisher_id) REFERENCES wishers(id),
//             CONSTRAINT fk_group FOREIGN KEY(group_id) REFERENCES groups(id)
//         );
//     `;
// }
// 
export async function GET() {
    const html = `
    <html>
    <body>
    <h1>You want this guy on your team.</h1>
    <h3>I promise.</h3>
    <a href="/">Return Home</a>
    <a href="https://www.linkedin.com/in/zach-petch/">Ask My People</a>
    <a href="https://github.com/zachpetch/">Example Work</a>
    </body>
    </html>
    `;

    return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html' },
    });
//     try {
//         await client.sql`BEGIN`;
//         await setWishers();
//         await setGroups();
//         await setWishlists();
//         await setItems();
//         await client.sql`COMMIT`;
// 
//         return Response.json({ message: 'Database setup successfully completed' });
//     } catch (error) {
//         await client.sql`ROLLBACK`;
//         return Response.json({ error }, { status: 500 });
//     }
}
