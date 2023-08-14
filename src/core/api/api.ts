export const fetchResult = async (): Promise<string> => {
  // Between 1 and 10
  const rnd = Math.floor(Math.random() * 9) + 1;
  const data: string = await new Promise((resolve, reject) => {
    setTimeout(() => {
      rnd > 4
        ? resolve("You are welcome.")
        : reject(":( Error happened. Repeat again plz.");
    }, rnd * 500);
  });
  return data;
};

export const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
};
