import { Post } from "./postMetadata";

class PostCache {
  private static instance: PostCache;
  private cache = new Map<string, Post>();

  private constructor() {}

  static getInstance() {
    if (!PostCache.instance) {
      PostCache.instance = new PostCache();
    }
    return PostCache.instance;
  }

  get(key: string): Post | undefined {
    return this.cache.get(key);
  }

  set(key: string, post: Post): void {
    this.cache.set(key, post);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}