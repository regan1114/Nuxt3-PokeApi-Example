// 未定義api的處理方法
export default defineEventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: "API Path Not Found",
  });
});
