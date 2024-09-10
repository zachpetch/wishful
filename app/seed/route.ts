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
// async function setGroupUser() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS group_wisher (
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
// export async function GET() {
//     try {
//         await client.sql`BEGIN`;
// //        await setWishers();
// //        await setGroups();
//         await setGroupUser();
//         await setItems();
//         await client.sql`COMMIT`;
// 
//         return Response.json({ message: 'Database setup successfully completed' });
//     } catch (error) {
//         await client.sql`ROLLBACK`;
//         return Response.json({ error }, { status: 500 });
//     }
// }
