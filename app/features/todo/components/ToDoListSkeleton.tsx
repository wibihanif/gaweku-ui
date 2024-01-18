export const ToDoListSkeleton = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="w-full">
        <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-400 mb-2.5"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-400 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-400 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-400 max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
