import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_API_URL);
pb.autoCancellation(false);

export const getAllPosts = async (page, filter, sortBy) => {
  let options = {};
  if (filter) {
    options = { filter: filter };
  }
  if (sortBy) {
    options = { sort: sortBy };
  }
  const res = await pb.collection('posts').getList(page, 30, options);
  return res;
}
