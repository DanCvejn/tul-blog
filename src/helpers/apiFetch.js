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

export const register = async (data) => {
  try {
    const res = await pb.collection("users").create(data);
    if (res.errorMessage) {
      return { error: true, message: "Někde nastala chyba, pravděpodobně již někdo s těmito údaji existuje." };
    }
    if (res.id) {
      await pb.collection("users").requestVerification(data.email);
      return { error: false, user: res }
    }
  } catch (error) {
    return { error: true, message: "Někde nastala chyba, pravděpodobně již někdo s těmito údaji existuje." };
  }
}

export const login = async (email, password) => {
  try {
    const res = await pb.collection("users").authWithPassword(email, password);
    return res;
  } catch (error) {
    return { error: true, message: "Nastala chyba" };
  }
}
