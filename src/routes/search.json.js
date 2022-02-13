import { searchIndex } from '$lib/search';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  return {
    status: 200,
    body: { searchIndex },
  };
}