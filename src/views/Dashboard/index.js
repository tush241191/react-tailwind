import PageHeader from '../../components/Layout/PageHeader';

const Dashboard = () => {
  return (
    <main className='flex-1'>
      <PageHeader title={'Home'}/>
      <div className='px-4 mt-6 sm:px-6 lg:px-8'>
        <h2 className='text-gray-500 text-2xl font-medium uppercase tracking-wide'>
          Dashboard content
        </h2>
      </div>
    </main>
  );
};

export default Dashboard;
