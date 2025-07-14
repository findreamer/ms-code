const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">管理控制台</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* 管理控制台统计卡片将在这里实现 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">统计卡片 1</div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">统计卡片 2</div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">统计卡片 3</div>
      </div>
    </div>
  );
};

export default Dashboard;