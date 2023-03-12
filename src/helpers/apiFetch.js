import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_API_URL);
pb.autoCancellation(false);

export const getAllPosts = async (page, filter, sortBy) => {
  let options = { expand: "author, tags" };
  if (filter) {
    options.filter = filter;
  }
  if (sortBy) {
    options.sort = sortBy;
  }
  const res = await pb.collection('posts').getList(page, 30, options);
  return res;
}

export const getMyPosts = async (page, userId) => {
  let options = {
    filter: `author.id = "${userId}"`,
    sort: "-created",
  };
  const res = await pb.collection('posts').getList(page, 10, options);
  return res;
}

export const getPostById = async (postId) => {
  const res = await pb.collection('posts').getOne(postId, { expand: "author, tags" });
  return res;
}

export const createNewPost = async (data) => {
  try {
    const res = await pb.collection("posts").create(data);
    if (res.errorMessage) {
      return { error: true, message: "Při vytváření článku nastala chyba." }
    }
    return res;
  } catch (error) {
    console.log(error);
    return { error: true, message: "Při vytváření článku nastala chyba." }
  }
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
    if (res.record.verified) {
      return res;
    }
    pb.authStore.clear();
    return { error: true, message: "Tento účet stále není ověřený. Pokud chceš pokračovat, tak nejdříve ověř svůj e-mail." }
  } catch (error) {
    return { error: true, message: "Nastala chyba" };
  }
}

export const getUser = async () => {
  if (pb.authStore.isValid) {
    return pb.authStore.model;
  }
  pb.authStore.clear();
  return null;
}

export const logout = async () => {
  pb.authStore.clear();
  return true;
}
