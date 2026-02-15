export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  // Remove old entries
  #reap() {
    for (const [key, value] of this.#cache) {
      if (value.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  // Start automatic cleanup loop
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  // Stop the automatic cleanup loop
  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }

  // Add a value to the cache
  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = { createdAt: Date.now(), val };
    this.#cache.set(key, entry);
  }

  // Get a value from the cache
  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    return entry ? (entry.val as T) : undefined;
  }
}

